/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'introduction/what_is_goblitz',
        'introduction/architecture',
        'introduction/folder_structure',
      ],
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/quick-start/quick_start',
      ],
    },
    {
      type: 'category',
      label: 'Sessions',
      items: [
        'sessions/overview',
        'sessions/sessions',
      ],
    },
    {
      type: 'category',
      label: 'Frontend Development',
      items: [
        'frontend/overview',
        'frontend/developing_goblitz',
        'frontend/react',
      ],
    },
    {
      type: 'category',
      label: 'Examples',
      items: [
        'examples/get_users_query',
        'examples/example_controller',
      ],
    },
  ]
  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
