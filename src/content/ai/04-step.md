---
step: "04"
title: Create embeddings
---

To search through your texts base (like documentation or a book that you really like) you should create embeddings for it. Wonderful **[Greg Richardson](https://twitter.com/ggrdson)** already made a script to do that. The only thing left to do is to collect your documents as a bunch of Markdown files and pass them to it.

You can find the full code here: [https://github.com/supabase/supabase/blob/6acc7332c6909030c1a2c69c561c27c39ff1f1ff/apps/docs/scripts/generate-embeddings.ts](https://github.com/supabase/supabase/blob/6acc7332c6909030c1a2c69c561c27c39ff1f1ff/apps/docs/scripts/generate-embeddings.ts)

What it does is:

1. Searches for all the Markdown files in the provided Path.
2. Parsing markdown files to split it into text blocks. It just uses headings for that.
3. Parsing these blocks by the type of the text and removes some additional blocs like JS components (Yes, you can pass MDX as well).
4. Uses `openai.createEmbedding` to actually generate embeddings from text blocks.
5. Saves the source page links, raw text blocks and embeddings to the Supabase Database using `supabase-js` library.

Don’t forget to specify `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` and `OPENAI_KEY` environment variables.
