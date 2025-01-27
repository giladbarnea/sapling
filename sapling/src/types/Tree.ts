// React component tree is a nested data structure, children are Trees

export type ParentInfo = {
  id: string;
  name: string;
  filePath: string;
};

export type Tree = {
  id: string;
  name: string;
  fileName: string;
  filePath: string;
  importPath: string;
  expanded: boolean;
  depth: number;
  count: number;
  thirdParty: boolean;
  reactRouter: boolean;
  reduxConnect: boolean;
  children: Tree[];
  parentList: string[];
  renderingParents: ParentInfo[];  // Store only essential parent info to avoid circular references
  props: { [key: string]: boolean; };
  error: string;
};
