---
step: "02"
title: Add PG-vector extension
---

[PgVector](https://github.com/pgvector/pgvector) is a PostgreSQL extension for vector similarity search. It allows you to store vectors of numbers in the database, which can then be used to find similar items. For example, you can use it to find similar products, text, images, and other types of data.

And what are text embedding used in AI? Text embeddings are numerical representations of the semantic meaning of a piece of text. They are usually vectors of floating-point numbers that can be compared and measured for similarity. Text embeddings can be used for various natural language processing tasks, such as search, clustering, recommendations, and anomaly detection. Text embeddings can be obtained using different methods, such as language modeling and feature learning.

So PgVector is a great fit to store those and compare for similarity. To enable the `pgvector` extension, you can use the following code right from your Supabase Project’s SQL Editor:

```sql
create extension if not exists pgvector with schema extensions;
```

Or go to [Database > Extensions](https://app.supabase.com/project/_/database/extensions) and enable the Vector extension.