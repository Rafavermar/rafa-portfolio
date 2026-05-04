---
title: "Selective rebuild by Lineage BFS on Databricks"
description: "Databricks Free Edition POC for rebuilding only the minimum upstream lineage branch required for a Gold view."
image: "/images/work/databricks-lineage-selective-rebuild.png"
context: "Public Databricks Free Edition project documented on Medium."
problem: "When a Gold view has a data quality defect, rebuilding every upstream object is noisy and inefficient."
solution: "Built a reproducible lineage-based workflow that fixes the upstream cause and rebuilds only the selected branch needed for the affected Gold object."
stack:
  - Databricks
  - Python
  - Databricks Asset Bundles
  - Unity Catalog
  - Lineage
impact: "Shows selective recovery, lineage reasoning and repeatable platform automation in a compact Databricks POC."
links:
  - label: "Medium article"
    url: "https://medium.com/@jr.vera.ma/selective-rebuild-in-databricks-free-edition-using-lineage-bfs-596ab06a77f6"
  - label: "GitHub repository"
    url: "https://github.com/Rafavermar/Databricks-Lineage-selective-rebuild"
tags:
  - Databricks
  - Lineage
  - Data quality
  - Automation
  - Python
  - Lakehouse
featured: true
---
