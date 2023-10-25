type OpenSourceProduct = {
  title: string;
  description: string;
  repository: string;
};

type Product = {
  title: string;
  description: string;
  url: string;
};

const OSS_PRODUCTS: OpenSourceProduct[] = [
  {
    title: "NekoDraw",
    description: "AI powered Illustration Assistant for CLIP STUDIO PAINT.",
    repository: "https://github.com/mika-f/nekodraw",
  },
  {
    title: "Drag-and-Drop Support",
    description: "Experimental Blender Add-on: Drag and Drop Support",
    repository: "https://github.com/mika-f/blender-drag-and-drop",
  },
  {
    title: "Animation Auto Assignment",
    description:
      "Unity Editor Extension that tracks changes on hierarchy and automatically repairs animation property paths.",
    repository:
      "https://github.com/natsuneko-laboratory/animation-auto-assignment",
  },
  {
    title: "Refined Animation Property",
    description:
      "Unity Editor Extension that refine animation property editor.",
    repository:
      "https://github.com/natsuneko-laboratory/refined-animation-property",
  },
  {
    title: "Dairi",
    description:
      "Dairi is a small, simple, and customizable Git LFS Proxy for the Edges. It works on Serverless Edge Platforms such as Cloudflare Workers, Deno, Vercel, AWS Lambda, Lambda@Edge, and Node.js.",
    repository: "https://github.com/natsuneko-laboratory/git-lfs-proxy",
  },
  {
    title: "Animator Controller Tool PostProcessing",
    description:
      "Rewrite the behavior of AnimatorControllerTool to be the default setting recommended by VRChat.",
    repository:
      "https://github.com/natsuneko-laboratory/animator-controller-tool-post-processing",
  },
  {
    title: "Constraint by Humanoid",
    description:
      "A Unity editor extension that configures IConstraint component based on Unity Humanoid Rules.",
    repository:
      "https://github.com/natsuneko-laboratory/constraint-by-humanoid",
  },
  {
    title: "create-unitypackage",
    description: "Create UnityPackage without Unity in GitHub Actions",
    repository: "https://github.com/natsuneko-laboratory/create-unitypackage",
  },
  {
    title: "Power Rename",
    description:
      "PowerRename for Unity is Unity editor extension for renaming GameObjects in hierarchy.",
    repository: "https://github.com/natsuneko-laboratory/power-rename",
  },
  {
    title: "Refractions",
    description:
      "The .NET reflection library for .NET Standard 2.0 (for Unity backward compatibles).",
    repository: "https://github.com/natsuneko-laboratory/refractions",
  },
  {
    title: "AssetExplorer",
    description:
      "AssetExplorer is a Unity client implementation of AssetDatabase (assetdatabase.natsuneko.cat). As an editor extension, you can take over Unity's workflow and search for assets.",
    repository: "https://github.com/mika-f/AssetExplorer",
  },
  {
    title: "UStyled",
    description:
      "UStyled: A Utility-First USS Framework for UI Toolkit, inspired by Tailwind CSS.",
    repository: "https://github.com/mika-f/UStyled",
  },
];

const PRODUCTS: Product[] = [
  {
    title: "TextMesh Creator",
    description:
      "TextMesh Creator is an Blender add-on to create a text mesh from a specified font file.",
    url: "https://docs.natsuneko.cat/en-us/text-mesh-creator/overview/",
  },
  {
    title: "Udon Analyzer",
    description:
      "Roslyn Analyzers for VRChat UdonSharp developers. Report realtime diagnostics in your code such as not exposed API, not supported syntaxes, and best practices for UdonSharp.",
    url: "https://docs.natsuneko.cat/en-us/udon-analyzer/overview/",
  },
];

export { OSS_PRODUCTS, PRODUCTS };
