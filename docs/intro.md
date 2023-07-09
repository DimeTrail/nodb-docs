---
sidebar_position: 1
---

# Introduction

You can think of **[NoDB](https://nodb.ai)** as Google and ChatGPT combined, but only for your documents.

## Overview

NoDB is a SaaS platform that orchestrates the process of searching your own data and querying [LLMs](https://nodb.ai) (such as [Open AI models](https://platform.openai.com/docs/models)). Behind the scenes, NoDB generates your [vector embeddings](https://www.pinecone.io/learn/vector-embeddings-for-developers/) and calls the LLMs with your query.

### Vector embeddings

Every document you upload, NoDB processes it by generating [vector embeddings](https://www.pinecone.io/learn/vector-embeddings-for-developers/), a numerical represention that captures the semantic meaning and contextual information of your data. These computed embeddings are indexed in a [vector database](https://www.pinecone.io/learn/vector-database/) for fast and accurate seaches based on similarity or relevance.

When you submit a query, NoDB compares the vector representation of your query with the indexed embeddings in order to perform efficient search operations.

### LLM integration

NoDB takes your query, builds the relevant context from the precomputed embeddings, and calls an LLM to obtain insightful responses. Within the console, regenerate responses, change the prompt, configure settings, and publish a Knowledge Agent.

A **Knowledge Agent** is a generated app that comes out-of-the-box with NoDB when you publish a data source. This way, you can query your documents from anywhere.

## Get Started

[Get Started](/docs/guides/get-started) to publish a Knowledge Agent in minutes!
