type OpenSourceProduct = {
  title: string;
  description: { en: string; ja: string };
  repository: string;
  stars: number;
  forks: number;
};

type Product = {
  title: string;
  description: { en: string; ja: string };
  url: string;
  likes: number;
};

type WebService = {
  title: string;
  description: { en: string; ja: string };
  url: string;
};

// manually updated at 2023/10/26
const OSS_PRODUCTS: OpenSourceProduct[] = [
  {
    title: "NekoDraw",
    description: {
      en: "AI powered Illustration Assistant for CLIP STUDIO PAINT.",
      ja: "CLIP STUDIO PAINT のための AI イラストアシスタント",
    },
    repository: "mika-f/nekodraw",
    stars: 114,
    forks: 6,
  },
  {
    title: "Drag-and-Drop Support",
    description: {
      en: "Experimental Blender Add-on: Drag and Drop Support",
      ja: "Experimental Blender Add-on: Drag and Drop Support",
    },
    repository: "mika-f/blender-drag-and-drop",
    stars: 186,
    forks: 5,
  },
  {
    title: "Animation Auto Assignment",
    description: {
      en: "Unity Editor Extension that tracks changes on hierarchy and automatically repairs animation property paths.",
      ja: "ヒエラルキーの変更を監視して、アニメーションのプロパティパスを自動修正する Unity エディター拡張",
    },
    repository: "natsuneko-laboratory/animation-auto-assignment",
    stars: 13,
    forks: 0,
  },
  {
    title: "Refined Animation Property",
    description: {
      en: "Unity Editor Extension that refine animation property editor.",
      ja: "アニメーションプロパティエディターを改良する Unity エディター拡張",
    },
    repository: "natsuneko-laboratory/refined-animation-property",
    stars: 10,
    forks: 0,
  },
  {
    title: "Dairi",
    description: {
      en: "Dairi is a small, simple, and customizable Git LFS Proxy for the Edges. It works on Serverless Edge Platforms such as Cloudflare Workers, Deno, Vercel, AWS Lambda, Lambda@Edge, and Node.js.",
      ja: "Dairi は小さくてシンプルな、そしてカスタマイズ可能な Edge で動作する Git LFS プロキシサーバ。 Cloudflare Workers, Deno, Vercel, AWS Lambda, Lambda@Edge, Node.js のようなサーバーレスプラットフォームに対応",
    },
    repository: "natsuneko-laboratory/git-lfs-proxy",
    stars: 7,
    forks: 0,
  },
  {
    title: "Animator Controller Tool PostProcessing",
    description: {
      en: "Rewrite the behavior of AnimatorControllerTool to be the default setting recommended by VRChat.",
      ja: "AnimatorControllerTool の動きを VRChat の推奨設定へと自動修正",
    },
    repository: "natsuneko-laboratory/animator-controller-tool-post-processing",
    stars: 6,
    forks: 0,
  },
  {
    title: "Constraint by Humanoid",
    description: {
      en: "A Unity editor extension that configures IConstraint component based on Unity Humanoid Rules.",
      ja: "Unity の Humanoid ルールに基づいた IConstraint を設定するための Unity エディター拡張",
    },
    repository: "natsuneko-laboratory/constraint-by-humanoid",
    stars: 4,
    forks: 0,
  },
  {
    title: "create-unitypackage",
    description: {
      en: "Create UnityPackage without Unity in GitHub Actions",
      ja: "UnityPackage を Unity なしで作成する GitHub Actions",
    },
    repository: "natsuneko-laboratory/create-unitypackage",
    stars: 3,
    forks: 0,
  },
  {
    title: "Power Rename",
    description: {
      en: "PowerRename for Unity is Unity editor extension for renaming GameObjects in hierarchy.",
      ja: "PowerRename for Unity はヒエラルキー上の GameObject を効率良くリネームするための Unity エディター拡張",
    },
    repository: "natsuneko-laboratory/power-rename",
    stars: 2,
    forks: 0,
  },
  {
    title: "Refractions",
    description: {
      en: "The .NET reflection library for .NET Standard 2.0 (for Unity backward compatibles).",
      ja: "Unity との後方互換性を持たせた .NET Standard 2.0 準拠のリフレクションライブラリ",
    },
    repository: "natsuneko-laboratory/refractions",
    stars: 1,
    forks: 0,
  },
  {
    title: "AssetExplorer",
    description: {
      en: "AssetExplorer is a Unity client implementation of AssetDatabase (assetdatabase.natsuneko.cat). As an editor extension, you can take over Unity's workflow and search for assets.",
      ja: "プロジェクトの中にある Missing なアセットを検索するための Unity エディター拡張。",
    },
    repository: "mika-f/AssetExplorer",
    stars: 1,
    forks: 0,
  },
  {
    title: "UStyled",
    description: {
      en: "UStyled: A Utility-First USS Framework for UI Toolkit, inspired by Tailwind CSS.",
      ja: "UStyled: Tailwind CSS にインスパイアされた UI Toolkit のためのユーティリティファースト USS フレームワーク",
    },
    repository: "mika-f/UStyled",
    stars: 0,
    forks: 0,
  },
  {
    title: "remark-text-decoration",
    description: {
      en: "remark-text-decoration is a remark plugin to add text decoration syntax.",
      ja: "文字を装飾するための remark プラグイン",
    },
    repository: "mika-f/remark-text-decoration",
    stars: 0,
    forks: 0,
  },
  {
    title: "Duplicate Name Modifier",
    description: {
      en: "Blender add-on for renaming duplicate objects from Object.001 to Object_001.",
      ja: "重複したオブジェクトの名前を Object.001 から Object_001 へと自動修正する Blender アドオン",
    },
    repository: "mika-f/duplicate-name-modifier",
    stars: 0,
    forks: 0,
  },
  {
    title: "Bone Convention Switcher",
    description: {
      en: "Blender add-on for switching Blender Bones Naming Conventions between Unity and MMD.",
      ja: "Unity と MMD のボーン命名規則を切り替えるための Blender アドオン",
    },
    repository: "mika-f/bone-convention-switcher",
    stars: 0,
    forks: 0,
  },
  {
    title: "lycoris",
    description: {
      en: "lycoris is a state management library inspired by Recoil and Jotai but for Vue.",
      ja: "Recoil と Jotai に影響された Vue 向けのスレート管理ライブラリ",
    },
    repository: "mika-f/lycoris",
    stars: 0,
    forks: 0,
  },
  {
    title: "nextpida",
    description: {
      en: "nextpida is a package that TypeScript friendly apis path generator for Next.js.",
      ja: "Next.js のための TypeScript フレンドリーなパスを生成する Node.js パッケージ",
    },
    repository: "mika-f/nextpida",
    stars: 1,
    forks: 0,
  },
  {
    title: "Asset Lens",
    description: {
      en: "The fastest Unity asset reference search editor extension",
      ja: "世界最速のアセット参照検索 Unity エディター拡張",
    },
    repository: "natsuneko-laboratory/asset-lens",
    stars: 0,
    forks: 0,
  },
  {
    title: "Automatic Material Duplicator",
    description: {
      en: "Automatic Material Duplicator is an editor extension for Unity to duplicate materials automatically when you duplicate GameObjects.",
      ja: "オブジェクトを複製した際に、関連付けられた Material も一緒に複製する Unity エディター拡張",
    },
    repository: "natsuneko-laboratory/automatic-material-duplicator",
    stars: 0,
    forks: 0,
  },
  {
    title: "Material Split View",
    description: {
      en: "Material Split View is a Unity editor extension to preview the material with the split view.",
      ja: "Material を Inspector のロック無しで同時に閲覧できる Unity エディター拡張",
    },
    repository: "natsuneko-laboratory/material-split-view",
    stars: 0,
    forks: 0,
  },
  {
    title: "FBX Batch Export",
    description: {
      en: "Blender Add-on for exporting multiple FBX as batch",
      ja: "FBX を一括出力する Blender アドオン",
    },
    repository: "natsuneko-laboratory/fbx-batch-export",
    stars: 0,
    forks: 0,
  },
  {
    title: "Enhanced Transform Editor Embedded",
    description: {
      en: "Unity Editor Extension enhances the transform editor that supports math functions, variables, constants, and custom functions.",
      ja: "数学関数、変数、定数、カスタム関数を使えるようにする Transform エディターに置き換える Unity エディター拡張",
    },
    repository: "natsuneko-laboratory/enhanced-transform-editor-embedded",
    stars: 3,
    forks: 0,
  },
  {
    title: "SDK2 Compatible Viewer",
    description: {
      en: "The Unity editor extension that allows you to load various assets created with VRCSDK2.",
      ja: "VRChat SDK2 で作られたアセットを閲覧するための Unity エディター拡張",
    },
    repository: "natsuneko-laboratory/sdk2-compat-view",
    stars: 2,
    forks: 0,
  },
  {
    title: "unitypackage",
    description: {
      en: "Create UnityPackage from Node.js, written in TypeScript. No platform dependency.",
      ja: "Node.js で UnityPackage を作るためのパッケージ。プラットフォーム依存無し",
    },
    repository: "natsuneko-laboratory/unitypackage",
    stars: 1,
    forks: 0,
  },
  {
    title: "create-vpmpackage",
    description: {
      en: "Create VPMPackage without Unity and additional instructions in GitHub Actions",
      ja: "VPMPackage を Unity なしで、かつ特別な要件なく作成する GitHub Actions",
    },
    repository: "natsuneko-laboratory/create-vpmpackage",
    stars: 0,
    forks: 0,
  },
  {
    title: "vpmpackage",
    description: {
      en: "Create VPMPackage (VRChat Package) from Node.js, written in TypeScript. No platform dependency.",
      ja: "Node.js で VPM 互換のパッケージを作るためのパッケージ。プラットフォーム依存無し",
    },
    repository: "natsuneko-laboratory/vpmpackage",
    stars: 0,
    forks: 0,
  },
];

const PRODUCTS: Product[] = [
  {
    title: "TextMesh Creator",
    description: {
      en: "TextMesh Creator is an Blender add-on to create a text mesh from a specified font file.",
      ja: "テキストベースのメッシュをフォントから作成する Blender アドオン",
    },
    url: "https://docs.natsuneko.cat/en-us/text-mesh-creator/overview/",
    likes: 113,
  },
  {
    title: "Udon Analyzer",
    description: {
      en: "Roslyn Analyzers for VRChat UdonSharp developers. Report realtime diagnostics in your code such as not exposed API, not supported syntaxes, and best practices for UdonSharp.",
      ja: "VRChat UdonSharp 開発者向けの Roslyn Analyzers。対応していない API や文法、ベストプラクティスをリアルタイムコード解析でお知らせ",
    },
    url: "https://docs.natsuneko.cat/en-us/udon-analyzer/overview/",
    likes: 77,
  },
  {
    title: "Particle Live Toolkit - Algo Patcher",
    description: {
      en: "Patching hash algorithm for reducing bugs on Unity 2019.",
      ja: "Unity 2019 で発生するバグを修正する Unity エディター拡張",
    },
    url: "https://natsuneko-vrc.booth.pm/items/4000603",
    likes: 64,
  },
];

const WEB_SERVICES: WebService[] = [
  {
    title: "Natsuneko Docs",
    description: {
      en: "Documentation Hub for Natsuneko Laboratory Products",
      ja: "Natsuneko Laboratory のドキュメントサイト",
    },
    url: "https://docs.natsuneko.cat",
  },
  {
    title: "AssetExplorer",
    description: {
      en: "AssetExplorer opens the door to a world of Unity packages and assets, where you can effortlessly uncover, search, and delve into a wealth of resources, enabling you to take your Unity projects to new heights with ease and efficiency.",
      ja: "AssetExplorer opens the door to a world of Unity packages and assets, where you can effortlessly uncover, search, and delve into a wealth of resources, enabling you to take your Unity projects to new heights with ease and efficiency.",
    },
    url: "https://assetexplorer.natsuneko.cat",
  },
];

export { OSS_PRODUCTS, PRODUCTS, WEB_SERVICES };
export type { OpenSourceProduct, Product, WebService };
