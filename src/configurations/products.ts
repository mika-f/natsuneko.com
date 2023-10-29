type OpenSourceProduct = {
  title: string;
  description: string;
  repository: string;
  stars: number;
  forks: number;
};

type Product = {
  title: string;
  description: string;
  url: string;
  likes: number;
};

type WebService = {
  title: string;
  description: string;
  url: string;
};

// manually updated at 2023/10/26
const OSS_PRODUCTS: OpenSourceProduct[] = [
  {
    title: "NekoDraw",
    description: "AI powered Illustration Assistant for CLIP STUDIO PAINT.",
    repository: "mika-f/nekodraw",
    stars: 114,
    forks: 6,
  },
  {
    title: "Drag-and-Drop Support",
    description: "Experimental Blender Add-on: Drag and Drop Support",
    repository: "mika-f/blender-drag-and-drop",
    stars: 186,
    forks: 5,
  },
  {
    title: "Animation Auto Assignment",
    description:
      "Unity Editor Extension that tracks changes on hierarchy and automatically repairs animation property paths.",
    repository: "natsuneko-laboratory/animation-auto-assignment",
    stars: 13,
    forks: 0,
  },
  {
    title: "Refined Animation Property",
    description:
      "Unity Editor Extension that refine animation property editor.",
    repository: "natsuneko-laboratory/refined-animation-property",
    stars: 10,
    forks: 0,
  },
  {
    title: "Dairi",
    description:
      "Dairi is a small, simple, and customizable Git LFS Proxy for the Edges. It works on Serverless Edge Platforms such as Cloudflare Workers, Deno, Vercel, AWS Lambda, Lambda@Edge, and Node.js.",
    repository: "natsuneko-laboratory/git-lfs-proxy",
    stars: 7,
    forks: 0,
  },
  {
    title: "Animator Controller Tool PostProcessing",
    description:
      "Rewrite the behavior of AnimatorControllerTool to be the default setting recommended by VRChat.",
    repository: "natsuneko-laboratory/animator-controller-tool-post-processing",
    stars: 6,
    forks: 0,
  },
  {
    title: "Constraint by Humanoid",
    description:
      "A Unity editor extension that configures IConstraint component based on Unity Humanoid Rules.",
    repository: "natsuneko-laboratory/constraint-by-humanoid",
    stars: 4,
    forks: 0,
  },
  {
    title: "create-unitypackage",
    description: "Create UnityPackage without Unity in GitHub Actions",
    repository: "natsuneko-laboratory/create-unitypackage",
    stars: 3,
    forks: 0,
  },
  {
    title: "Power Rename",
    description:
      "PowerRename for Unity is Unity editor extension for renaming GameObjects in hierarchy.",
    repository: "natsuneko-laboratory/power-rename",
    stars: 2,
    forks: 0,
  },
  {
    title: "Refractions",
    description:
      "The .NET reflection library for .NET Standard 2.0 (for Unity backward compatibles).",
    repository: "natsuneko-laboratory/refractions",
    stars: 1,
    forks: 0,
  },
  {
    title: "AssetExplorer",
    description:
      "AssetExplorer is a Unity client implementation of AssetDatabase (assetdatabase.natsuneko.cat). As an editor extension, you can take over Unity's workflow and search for assets.",
    repository: "mika-f/AssetExplorer",
    stars: 1,
    forks: 0,
  },
  {
    title: "UStyled",
    description:
      "UStyled: A Utility-First USS Framework for UI Toolkit, inspired by Tailwind CSS.",
    repository: "mika-f/UStyled",
    stars: 0,
    forks: 0,
  },
  {
    title: "remark-text-decoration",
    description:
      "remark-text-decoration is a remark plugin to add text decoration syntax.",
    repository: "mika-f/remark-text-decoration",
    stars: 0,
    forks: 0,
  },
  {
    title: "Duplicate Name Modifier",
    description:
      "Blender add-on for renaming duplicate objects from Object.001 to Object_001.",
    repository: "mika-f/duplicate-name-modifier",
    stars: 0,
    forks: 0,
  },
  {
    title: "Bone Convention Switcher",
    description:
      "Blender add-on for switching Blender Bones Naming Conventions between Unity and MMD.",
    repository: "mika-f/bone-convention-switcher",
    stars: 0,
    forks: 0,
  },
  {
    title: "lycoris",
    description:
      "lycoris is a state management library inspired by Recoil and Jotai but for Vue.",
    repository: "mika-f/lycoris",
    stars: 0,
    forks: 0,
  },
  {
    title: "nextpida",
    description:
      "nextpida is a package that TypeScript friendly apis path generator for Next.js.",
    repository: "mika-f/nextpida",
    stars: 1,
    forks: 0,
  },
  {
    title: "Asset Lens",
    description: "The fastest Unity asset reference search editor extension",
    repository: "natsuneko-laboratory/asset-lens",
    stars: 0,
    forks: 0,
  },
  {
    title: "Automatic Material Duplicator",
    description:
      "Automatic Material Duplicator is an editor extension for Unity to duplicate materials automatically when you duplicate GameObjects.",
    repository: "natsuneko-laboratory/automatic-material-duplicator",
    stars: 0,
    forks: 0,
  },
  {
    title: "Material Split View",
    description:
      "Material Split View is a Unity editor extension to preview the material with the split view.",
    repository: "natsuneko-laboratory/material-split-view",
    stars: 0,
    forks: 0,
  },
  {
    title: "FBX Batch Export",
    description: "Blender Add-on for exporting multiple FBX as batch",
    repository: "natsuneko-laboratory/fbx-batch-export",
    stars: 0,
    forks: 0,
  },
  {
    title: "Enhanced Transform Editor Embedded",
    description:
      "Unity Editor Extension enhances the transform editor that supports math functions, variables, constants, and custom functions.",
    repository: "natsuneko-laboratory/enhanced-transform-editor-embedded",
    stars: 3,
    forks: 0,
  },
  {
    title: "SDK2 Compatible Viewer",
    description:
      "The Unity editor extension that allows you to load various assets created with VRCSDK2.",
    repository: "natsuneko-laboratory/sdk2-compat-view",
    stars: 2,
    forks: 0,
  },
  {
    title: "unitypackage",
    description:
      "Create UnityPackage from Node.js, written in TypeScript. No platform dependency.",
    repository: "natsuneko-laboratory/unitypackage",
    stars: 1,
    forks: 0,
  },
  {
    title: "create-vpmpackage",
    description:
      "Create VPMPackage without Unity and additional instructions in GitHub Actions",
    repository: "natsuneko-laboratory/create-vpmpackage",
    stars: 0,
    forks: 0,
  },
  {
    title: "vpmpackage",
    description:
      "Create VPMPackage (VRChat Package) from Node.js, written in TypeScript. No platform dependency.",
    repository: "natsuneko-laboratory/vpmpackage",
    stars: 0,
    forks: 0,
  },
];

const PRODUCTS: Product[] = [
  {
    title: "TextMesh Creator",
    description:
      "TextMesh Creator is an Blender add-on to create a text mesh from a specified font file.",
    url: "https://docs.natsuneko.cat/en-us/text-mesh-creator/overview/",
    likes: 113,
  },
  {
    title: "Udon Analyzer",
    description:
      "Roslyn Analyzers for VRChat UdonSharp developers. Report realtime diagnostics in your code such as not exposed API, not supported syntaxes, and best practices for UdonSharp.",
    url: "https://docs.natsuneko.cat/en-us/udon-analyzer/overview/",
    likes: 77,
  },
  {
    title: "Particle Live Toolkit - Algo Patcher",
    description: "Patching hash algorithm for reducing bugs on Unity 2019.",
    url: "https://natsuneko-vrc.booth.pm/items/4000603",
    likes: 64,
  },
];

const WEB_SERVICES: WebService[] = [
  {
    title: "Natsuneko Docs",
    description: "Documentation Hub for Natsuneko Laboratory Products",
    url: "https://docs.natsuneko.cat",
  },
  {
    title: "AssetExplorer",
    description:
      "AssetExplorer opens the door to a world of Unity packages and assets, where you can effortlessly uncover, search, and delve into a wealth of resources, enabling you to take your Unity projects to new heights with ease and efficiency.",
    url: "https://assetexplorer.natsuneko.cat",
  },
];

export { OSS_PRODUCTS, PRODUCTS, WEB_SERVICES };
export type { OpenSourceProduct, Product, WebService };
