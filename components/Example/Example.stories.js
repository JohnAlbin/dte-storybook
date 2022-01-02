import ExampleTwig from './Example.twig';
import './Example.css';

export default { title: 'Example' };

export const Example = (_, { loaded: { renderedStory } }) => renderedStory;

Example.render = ExampleTwig;