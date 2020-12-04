---
id: shap
title: "SHAP"
sidebar_label: "SHAP"
slug: /microsoft/shap
---

SHAP はゲーム理論のシャープレイ値を利用して、機械学習モデルの予測値を説明する技術です。

Paper : [A Unified Approach to Interpreting Model Predictions](https://arxiv.org/abs/1705.07874)


## シャープレイ値とは？
複数のプレイヤーが参加する賞金ありのゲームを考えます。ゲームで得られた賞金を各プレイヤーにそれぞれの貢献度に応じて配布するときにどのように計算すれば良いでしょうか？

プレイヤーが A, B, C と 3人 いる場合にでは、下記の全 3!=6 通りの順序でゲーム参加した場合の平均の貢献度 (=シャープレイ値) を算出する必要があります。

A -> B -> C  
A -> C -> B  
B -> A -> C  
B -> C -> A  
C -> A -> B   
C -> B -> A  

シャープレイ値は、下記の式で表現することできます。

$\large \phi_i = \sum_{\substack{S\subseteqq F\backslash\{i\}}}\frac{|S|!(|F|-|S|-1)!}{|F|!}[f_{S\cup\{i\}}(x_{S\cup\{i\}}) - f_S(x_S)]$




機械学習においては、各プレイヤーをそれぞれ特徴量、賞金を予測値と考えます。つまりシャープレイ値が特徴量の貢献度を表すと考えます。

<br/>

## SHAP
<img src="https://raw.githubusercontent.com/slundberg/shap/master/docs/artwork/shap_header.png" />

SHAP (SHapley Additive exPlanation) 値は、シャープレイ値に基づく各特徴量の貢献度です。

正確にシャープレイ値を計算するのはあらゆる順序を考慮する必要があり、サンプル数が大量 (2^特徴量数のモデル学習) に必要です。SHAP ではモデルの種類ごとに計算効率が良いアルゴリズムを提案しています。

- Kernel SHAP (Linear LIME + Shapley values)
- Linear SHAP 
- Deep SHAP (DeepLIFT + Shapley values)



Lift($L$) can be determined by Lift Coefficient ($C_L$) like the following
equation.

$$
L = \frac{1}{2} \rho v^2 S C_L
$$