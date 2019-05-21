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
* Custom events must be listened for using `addEventListener`.
