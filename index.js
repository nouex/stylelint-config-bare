"use strict"

/**
  * 1. Enfore all lower case.
  * 2. Detect invalid CSS.
  * 3. Detect anything to avoid unintentional mishaps.
  */

module.exports = {
  "rules": {
    "at-rule-empty-line-before": [ "always", {
      except: [
        "blockless-after-same-name-blockless",
        "first-nested",
      ],
      ignore: ["after-comment"],
      severity: "warning"
    } ],
    "at-rule-name-case": ["lower", { "severity": "warning" }],
    "at-rule-name-space-after": ["always-single-line", { "severity": "warning" }],
    "at-rule-semicolon-newline-after": ["always", { "severity": "warning" }],
    "block-closing-brace-empty-line-before": ["never", { "severity": "warning" }],
    "block-closing-brace-newline-after": ["always", { "severity": "warning" }],
    "block-closing-brace-newline-before": ["always-multi-line", { "severity": "warning" }],
    "block-closing-brace-space-before": ["always-single-line", { "severity": "warning" }],
    "block-no-empty": [true, { "severity": "warning" }],
    "block-opening-brace-newline-after": ["always-multi-line", { "severity": "warning" }],
    "block-opening-brace-space-after": ["always-single-line", { "severity": "warning" }],
    "block-opening-brace-space-before": ["always", { "severity": "warning" }],
    "color-hex-case": ["lower", { "severity": "warning" }],
    "color-hex-length": ["short", { "severity": "warning" }],
    "color-no-invalid-hex": [true, { "severity": "error" }],
    "comment-empty-line-before": [ "always", {
      except: ["first-nested"],
      ignore: ["stylelint-commands"],
      severity: "warning"
    } ],
    "comment-no-empty": [true, { "severity": "warning" }],
    "comment-whitespace-inside": ["always", { "severity": "warning" }],
    "custom-property-empty-line-before": [ "always", {
      except: [
        "after-custom-property",
        "first-nested",
      ],
      ignore: [
        "after-comment",
        "inside-single-line-block",
      ],
      severity: "warning"
    } ],
    "declaration-bang-space-after": ["never", { "severity": "warning" }],
    "declaration-bang-space-before": ["always", { "severity": "warning" }],
    "declaration-block-no-duplicate-properties": [ true, {
      ignore: ["consecutive-duplicates-with-different-values"],
      severity: "error"
    } ],
    "declaration-block-no-redundant-longhand-properties": [true, { "severity": "warning" }],
    "declaration-block-no-shorthand-property-overrides": [true, { "severity": "error" }],
    "declaration-block-semicolon-newline-after": ["always-multi-line", { "severity": "warning" }],
    "declaration-block-semicolon-space-after": ["always-single-line", { "severity": "warning" }],
    "declaration-block-semicolon-space-before": ["never", { "severity": "warning" }],
    "declaration-block-single-line-max-declarations": [1, { "severity": "warning" }],
    "declaration-block-trailing-semicolon": ["always", { "severity": "warning" }],
    "declaration-colon-newline-after": ["always-multi-line", { "severity": "warning" }],
    "declaration-colon-space-after": ["always-single-line", { "severity": "warning" }],
    "declaration-colon-space-before": ["never", { "severity": "warning" }],
    "declaration-empty-line-before": [ "always", {
      except: [
        "after-declaration",
        "first-nested",
      ],
      ignore: [
        "after-comment",
        "inside-single-line-block",
      ],
      severity: "warning"
    } ],
    "font-family-no-duplicate-names": [true, { "severity": "error" }],
    "function-calc-no-unspaced-operator": [true, { "severity": "warning" }],
    "function-comma-newline-after": ["always-multi-line", { "severity": "warning" }],
    "function-comma-space-after": ["always-single-line", { "severity": "warning" }],
    "function-comma-space-before": ["never", { "severity": "warning" }],
    "function-linear-gradient-no-nonstandard-direction": [true, { "severity": "error" }],
    "function-max-empty-lines": [0, { "severity": "warning" }],
    "function-name-case": ["lower", { "severity": "warning" }],
    "function-parentheses-newline-inside": ["always-multi-line", { "severity": "warning" }],
    "function-parentheses-space-inside": ["never-single-line", { "severity": "warning" }],
    "function-whitespace-after": ["always", { "severity": "warning" }],
    "indentation": [2, { "severity": "warning" }],
    "keyframe-declaration-no-important": [true, { "severity": "error" }],
    "length-zero-no-unit": [true, { "severity": "error" }],
    "max-empty-lines": [1, { "severity": "warning" }],
    "media-feature-colon-space-after": ["always", { "severity": "warning" }],
    "media-feature-colon-space-before": ["never", { "severity": "warning" }],
    "media-feature-name-case": ["lower", { "severity": "warning" }],
    "media-feature-name-no-unknown": [true, { "severity": "error" }],
    "media-feature-parentheses-space-inside": ["never", { "severity": "warning" }],
    "media-feature-range-operator-space-after": ["always", { "severity": "warning" }],
    "media-feature-range-operator-space-before": ["always", { "severity": "warning" }],
    "media-query-list-comma-newline-after": ["always-multi-line", { "severity": "warning" }],
    "media-query-list-comma-space-after": ["always-single-line", { "severity": "warning" }],
    "media-query-list-comma-space-before": ["never", { "severity": "warning" }],
    "no-empty-source": [true, { "severity": "error" }],
    "no-eol-whitespace": [true, { "severity": "warning" }],
    "no-extra-semicolons": [true, { "severity": "error" }],
    "no-invalid-double-slash-comments": [true, { "severity": "error" }],
    "no-missing-end-of-source-newline": [true, { "severity": "warning" }],
    "number-leading-zero": ["always", { "severity": "warning" }],
    "number-no-trailing-zeros": [true, { "severity": "warning" }],
    "property-case": ["lower", { "severity": "error" }],// although browsers might allow, CSS is case sensitive
    "property-no-unknown": [true, { "severity": "error" }],
    "rule-empty-line-before": [ "always-multi-line", {
      except: ["first-nested"],
      ignore: ["after-comment"],
      severity: "warning"
    } ],
    "selector-attribute-brackets-space-inside": ["never", { "severity": "warning" }],
    "selector-attribute-operator-space-after": ["never", { "severity": "warning" }],
    "selector-attribute-operator-space-before": ["never", { "severity": "warning" }],
    "selector-combinator-space-after": ["always", { "severity": "warning" }],
    "selector-combinator-space-before": ["always", { "severity": "warning" }],
    "selector-descendant-combinator-no-non-space": [true, { "severity": "warning" }],
    "selector-list-comma-newline-after":["always", { "severity": "warning" }],
    "selector-list-comma-space-before": ["never", { "severity": "warning" }],
    "selector-max-empty-lines": [0, { "severity": "warning" }],
    "selector-pseudo-class-case": ["lower", { "severity": "error" }],
    "selector-pseudo-class-no-unknown": [true, { "severity": "error" }],
    "selector-pseudo-class-parentheses-space-inside": ["never", { "severity": "warning" }],
    "selector-pseudo-element-case": ["lower", { "severity": "error" }],
    "selector-pseudo-element-colon-notation": ["double", { "severity": "error" }], // although browsers support it, CSS3 states otherwise
    "selector-pseudo-element-no-unknown": [true, { "severity": "error" }],
    "selector-type-case": ["lower", { "severity": "error" }],
    "selector-type-no-unknown": [true, { "severity": "error" }],
    "shorthand-property-no-redundant-values": [true, { "severity": "warning" }],
    "string-no-newline": [true, { "severity": "error" }],
    "unit-case": ["lower", { "severity": "error" }],
    "unit-no-unknown": [true, { "severity": "error" }],
    "value-list-comma-newline-after": ["always-multi-line", { "severity": "warning" }],
    "value-list-comma-space-after": ["always-single-line", { "severity": "warning" }],
    "value-list-comma-space-before": ["never", { "severity": "warning" }],
    "value-list-max-empty-lines": [0, { "severity": "warning" }],
  },
}
