---
title: "Data format benchmark with Spark"
description: "A Spark benchmark comparing Parquet, Delta Lake, ORC, Avro and JSON."
image: "/images/work/file-format-benchmark.jpg"
context: "Public benchmarking project documented on Medium."
problem: "File format decisions often rely on generic guidance rather than hands-on measurements."
solution: "Built a benchmark project to compare read and write behavior across common big data formats."
stack:
  - Apache Spark
  - Scala
  - JMH
  - Delta Lake
  - Parquet
impact: "Provides a concrete basis for discussing storage format trade-offs."
links:
  - label: "Medium article"
    url: "https://medium.com/@jr.vera.ma/bechnmark-de-rendimiento-entre-parquet-delta-lake-orc-avro-y-json-3d47a9267cbd"
  - label: "GitHub repository"
    url: "https://github.com/Rafavermar/DataFormatBenchmark"
tags:
  - Spark
  - Scala
  - Delta Lake
  - Benchmarking
featured: false
---

This project keeps the storage format discussion grounded in executable code.
