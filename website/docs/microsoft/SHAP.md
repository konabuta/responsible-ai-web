---
id: shap
title: "SHAP"
sidebar_label: "SHAP"
slug: /microsoft/shap
---

SHAP はゲーム理論のシャープレイ値を利用して、機械学習モデルの予測値を説明する技術です。[A Unified Approach to Interpreting Model Predictions](https://arxiv.org/abs/1705.07874) の中で発表されたものです。ライブラリは [slundberg
/shap](https://github.com/slundberg/shap) で公開されています。

<br/><br/>


## シャープレイ値 (Shapely Values)
シャープレイ値は協調ゲーム理論で生まれたコンセプトです。

複数プレイヤーが参加して協力して賞金を獲得するゲームを考えます。ゲームで得られた賞金を各プレイヤーにそれぞれの貢献度に応じて配分するときにシャープレイ値を利用して公平に分配します。


シャープレイ値は、下記の式で表現することできます。

$\large \phi_i = \sum_{\substack{S\subseteqq F\backslash\{i\}}}\frac{|S|!(|F|-|S|-1)!}{|F|!}[f_{S\cup\{i\}}(x_{S\cup\{i\}}) - f_S(x_S)]$

<!-- プレイヤーが A, B, C と 3人 いる場合にでは、下記の全 3!=6 通りの順序でゲーム参加した場合の平均の貢献度 (=シャープレイ値) を算出する必要があります。 -->

<br/><br/>

## SHAP
<img src="https://raw.githubusercontent.com/slundberg/shap/master/docs/artwork/shap_header.png" />

SHAP (SHapley Additive exPlanation) は、先述したシャープレイ値に基づいて各特徴量の貢献度を算出する方法です。`model agnostic` な手法であり、あらゆる機械学習モデルに適用することができます。

機械学習の世界において、シャープレイ値における各プレイヤーをそれぞれの特徴量、賞金を予測値と考えます。つまり、シャープレイ値が特徴量の貢献度を表すと考えます。

正確にシャープレイ値を計算するのはあらゆる順序  (2^特徴量数) を考慮する必要があり、大量のデータのサブセットと機械学習モデルが必要です。これでは非常に時間がかかってしまうため、SHAP では計算効率が良いアルゴリズムを提案しています。


- Kernel SHAP (Linear LIME + Shapley values)
    - LIME では対象データとの距離によって重みを決めていたが、特徴量の数によって重みを変更するアプローチなどを採用している

- Deep SHAP (DeepLIFT + Shapley values)
    - 深層学習モデルを対象にした手法
- Tree SHAP
    - [Consistent Individualized Feature Attribution for Tree Ensenbles](https://arxiv.org/abs/1802.03888) にて発表された木構造のモデルに適用できる正確で効率的に SHAP 値を導出

