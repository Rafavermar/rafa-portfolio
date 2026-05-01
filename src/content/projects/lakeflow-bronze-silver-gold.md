---
title: "Bronze-Silver-Gold Lakeflow pipeline"
description: "A complete Databricks Lakeflow pipeline using public TPC-H data and a medallion architecture."
image: "/images/work/databricks-lakeflow.jpg"
context: "Public Databricks Free Edition project documented on Medium."
problem: "Lakehouse examples often skip the operational structure around ingestion, transformation and serving layers."
solution: "Built a small end-to-end pipeline using Bronze, Silver and Gold layers to demonstrate how data moves through a lakehouse in a controlled way."
stack:
  - Databricks
  - Lakeflow
  - Delta Lake
  - Medallion architecture
  - TPC-H
impact: "Provides a compact, reproducible example of lakehouse layering and pipeline structure."
links:
  - label: "Medium article"
    url: "https://medium.com/@jr.vera.ma/from-zero-to-lakeflow-building-a-bronze-silver-gold-pipeline-on-databricks-free-edition-ffd9def4591b"
tags:
  - Lakehouse
  - Databricks
  - Pipeline design
  - Spark
featured: true
---

The project demonstrates the core mechanics of a lakehouse pipeline without depending on private datasets or client-specific infrastructure.
