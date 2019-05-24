# webcomponent-sandbox
Sandbox for testing out Web Components.

The Web Components in this repo are built with [LitElement](https://lit-element.polymer-project.org/).
A polyfill is in place for browsers that do not support Web Components.

## Setup

Install the dependencies:

```sh
npm install
```

## Running

Following the [LitElement setup guide](https://lit-element.polymer-project.org/guide/start#setup):

```
npm install -g polymer-cli
polymer serve
```

## Findings

Each experiment has a comment explaining how the experiment was set up and what
the outcome was.

Some notable findings are:

* Attributes are coerced to the defined type, but properties are not.
* Any kind of node, including whitespace nodes, will be translcuded in slots if they are present.
  * This suggests that if there are named slots in a template, all slots should
    be named to prevent accidental replacement of the unnamed slot.
* Custom events must be listened for using `addEventListener`.
* If LitElement renders into the light DOM, it cannot use slots. The
  recommended way is to accept the child nodes to "slot" as properties.
* Host display styles should be defined as the default display style is
  `inline`. Block elements in an inline container produces unexpected
  results, like no dimensions (so setting `background-color` on the
  container does not appear to have any effect).
