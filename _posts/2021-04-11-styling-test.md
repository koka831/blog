---
title: Styling Test
date: 2021-04-11
categories:
- Design
tags:
- Design
description: Styling Test
---

```diff-rust{1,2}[class="diff-highlight"][class="line-numbers"][data-file="btree.rs"][data-line="2"]
@@ -111,6 +114,9 @@
         nasty_btree_map.insert(i, MyLeafNode(i));
     }
-    let mut st_btree_map: BtreeMap<(), ()> = BTreeMap::new();
+    let mut zst_btree_map: BTreeMap<(), ()> = BTreeMap::new();
+    zst_btree_map.insert((), ());
+
     // VecDeque
     let mut vec_deque = VecDeque::new();
     vec_deque.push_back(5);
```

[[warn | my title]]
| content
| content2

Styling check

Color Schemeには[Gruvbox](https://github.com/morhetz/gruvbox)を利用しています.

==highlight==

**Custom Blocks**

> This is a blockquote

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::


# An h1 header

## h2

### h3

#### h4

Paragraphs are separated by a blank line.

*Italic*, **bold**, and `monospace`. Itemized lists
look like:

  * this one
  * that one
  * the other one

Note that --- not considering the asterisk --- the actual text
content starts at 4-columns in.

> Block quotes are
> written like so.  
> They can span multiple paragraphs,
> if you like.

Use 3 dashes for an em-dash. Use 2 dashes for ranges (ex., "it's all
in chapters 12--14"). Three dots ... will be converted to an ellipsis.
Unicode is supported. ☺

Here's a numbered list:

 1. first item
 2. second item
 3. third item

Note again how the actual text starts at 4 columns in (4 characters
from the left side). Here's a code sample:

    # Let me re-iterate ...
    for i in 1 .. 10 { do-something(i) }

As you probably guessed, indented 4 spaces. By the way, instead of
indenting the block, you can use delimited blocks, if you like:

~~~python 
define foobar() {
    print "Welcome to flavor country!";
}
~~~

(which makes copying & pasting easier). You can optionally mark the
delimited block for Pandoc to syntax highlight it:

~~~python sample.py
import time
# Quick, count to ten!
for i in range(10):
    # (but not *too* quick)
    time.sleep(0.5)
    print i
~~~



### An h3 header ###

Now a nested list:

 1. First, get these ingredients:

      * carrots
      * celery
      * lentils

 2. Boil some water.

 3. Dump everything in the pot and follow
    this algorithm:

    ```python[data-file="python"]
    find wooden spoon
    uncover pot
    stir
    cover pot
    balance wooden spoon precariously on pot handle
    wait 10 minutes
    goto first step (or shut off burner when done)
    ```

    Do not bump wooden spoon or it will fall.

Notice again how text always lines up on 4-space indents (including
that last line which continues item 3 above).

Here's a link to [a website](http://foo.bar), and to a [section heading in the current
doc](#an-h2-header). Here's a footnote [^1].

[^1]: Footnote text goes here.

Tables can look like this:

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
A horizontal rule follows.

:tada:

:thinking_face:

***

## A2 2nd

[[toc]]
## A2 3rd
[[toc]]

## A2 2nd

[[toc]]
## A2 2nd

[[toc]]
## A2 2nd

[[toc]]
## A2 2nd

[[toc]]
## A2 2nd

[[toc]]
## A2 2nd

[[toc]]