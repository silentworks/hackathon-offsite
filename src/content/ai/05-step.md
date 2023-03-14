---
step: "05"
title: Answering the User’s Query
---

We are all prepared now. The next thing is the actual user interface. The idea here is to find the most similar text blocks from our knowledge to the query entered by a user. How to do that? Here is the time for the real superpower of PgVector.

We can use the same OpenAI API `openai.createEmbedding` to vectorise users’s query and create an embedding from it. And then use PgVector to compare its vectorized representation with all the knowledge base to find the most similar text blocks.

To do so you can use the following Postgres Function also provided by **[Greg Richardson](https://twitter.com/ggrdson)**:

[Embedding Similarity Search SQL](https://github.com/supabase/supabase/blob/6acc7332c6909030c1a2c69c561c27c39ff1f1ff/supabase/migrations/20230128004504_embedding_similarity_search.sql)

After you get Top-10 results, for example, you need to extract the real text blocks for these and put it into GPT-3.5 (a.k.a. ChatGPT) with the initial User’s query and the following Prompt to get the comprehensive answer form your personal AI assistant:

```
You are a very enthusiastic assistant who loves to help people! 
Given the following sections from the documentation, answer the 
question using only that information, outputted in markdown format. 
If you are unsure and the answer is not explicitly written in the 
documentation, say "Sorry, I don't know how to help with that."

Context sections:
${contextText}

Question: """
${sanitizedQuery}
"""

Answer as markdown (including related code snippets if available):
```

And don’t forget to use OpenAI `openai.createModeration` to verify that User’s query not violates any policies.
