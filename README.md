# movie-review

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

# 📽️ MovieReview

映画レビュー・評価投稿アプリケーション

---

## 🎯 概要

**MovieReview** は、ユーザーが映画の感想・評価を投稿し、共有できるレビュー型 Web アプリケーションです。  
シンプルかつ直感的なインターフェースで映画愛好家同士が交流し、作品選びの参考情報を提供します。

---

## 📌 開発目的

1. **フロントエンド実践学習**  
   Vue.js と Vuetify を用いた UI コンポーネント設計と実装を学ぶ。
2. **API 連携の理解**  
   Axios や Firebase Authentication／Firestore、json-server、TMDB API などでデータ通信を体験する。
3. **拡張性の高い設計**  
   フェーズ分けした機能追加で、段階的に機能を拡張できる構造を構築する。
4. **ポートフォリオ価値の向上**  
   映画という身近なテーマで実用性の高いアプリを作成し、開発スキルをアピール。

---

## ✨ 主な機能

### 基本機能

- **映画検索**  
  タイトル／俳優名／ジャンルでの絞り込み検索
- **レビュー投稿・編集**  
  ★ 評価＋コメントを投稿・更新
- **レビュー閲覧・フィルタリング**  
  新着順・評価順などで一覧表示
- **ユーザー認証**  
  サインアップ・ログイン（Firebase Authentication 推奨）

### 拡張機能

- **映画おすすめレコメンド**  
  過去の評価をもとにユーザーへ映画を提案
- **ウォッチリスト**  
  気になる映画を保存
- **フォロー・交流**  
  好きな投稿者をフォローして更新情報を取得
- **統計情報・ランキング**  
  人気映画ランキングやジャンル別統計を表示

---

## 🛠 技術スタック

### フロントエンド

- Vue.js (Vue CLI)
- Vuetify
- Vue Router
- Vuex
- Axios

### バックエンド／データ

- **ユーザー認証**: Firebase Authentication
- **データストア**:
  - json-server（モック API）
  - Firebase Firestore（本番向け）
- **映画情報**: TMDB API（任意）

---

## 🚀 学習ロードマップ

1. **フェーズ ① 基礎構築**

   - プロジェクト初期設定 (Vue CLI, Vuetify)
   - 映画検索画面の作成
   - レビュー投稿・一覧表示 UI

2. **フェーズ ② API 連携**

   - Firebase Authentication でユーザー認証実装
   - json-server／Firestore でレビュー保存・取得
   - Axios で API リクエスト処理

3. **フェーズ ③ 状態管理・ルーティング**

   - Vuex でレビュー＆ユーザー情報を管理
   - Vue Router で詳細ページ・プロフィール画面

4. **フェーズ ④ 機能拡張**
   - レコメンド機能
   - ウォッチリスト・フォロー機能
   - 統計・ランキング表示

---

## 📈 開発メリット

- **UI/UX 設計スキルの習得**
- **API／バックエンド連携の深い理解**
- **ポートフォリオとしての高い訴求力**

---

## 📌 今後のアイデア

- OpenAI API を使った感情分析によるレビュー自動スコアリング
- 映画公開プッシュ通知機能
- オンライン鑑賞会（ウォッチパーティ）管理
- SNS 連携（Twitter・Instagram）で投稿をシェア

---

## 🌟 なぜ MovieReview か？

- 映画レビューを通じて実践的なフロント＆バックエンド技術を段階学習
- 拡張性の高い設計で、要件追加に柔軟に対応
- 映画というテーマ性があり、ポートフォリオとしても魅力的

---

## 📖 ライセンス

MIT License
