---
title: "Spark UI performance troubleshooting lab"
description: "Reproducible Apache Spark lab for diagnosing performance issues through Spark Web UI evidence."
image: "/images/work/spark-ui-performance-lab.png"
context: "Public Spark performance lab documented on Medium."
problem: "Spark performance work often fails when teams cannot connect slow jobs, physical plans and runtime metrics to concrete evidence in Spark UI."
solution: "Built a Docker-based lab with Spark Standalone, Spark History Server, Scala cases, persistent event logs and optional Redpanda streaming cases."
stack:
  - Apache Spark
  - Spark UI
  - Scala
  - Docker
  - Redpanda
  - Structured Streaming
impact: "Provides a practical way to compare baseline and optimized runs across jobs, stages, SQL plans, storage, executors and streaming evidence."
links:
  - label: "Medium article"
    url: "https://medium.com/p/7b11c8e349dd?postPublishedType=initial"
  - label: "GitHub repository"
    url: "https://github.com/Rafavermar/spark-ui-performance-lab"
tags:
  - Spark
  - Spark UI
  - Scala
  - Docker
  - Streaming
  - Performance
featured: true
---

This belongs in Projects because it has a public repository, reproducible local execution, technical documentation and a complete lab structure.
