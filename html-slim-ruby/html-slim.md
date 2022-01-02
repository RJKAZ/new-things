So HTML Slim as I'm seeing is very much a Ruby infused version of HTML

The point was to make HTML as simple as possible, so all the actual tags are removed.

As a result indentions in the code are very important since that still creates parent/child/nested relations

doctype html
html
head
title Slim Examples
meta name="keywords" content="template language"
meta name="author" content=author
javascript:
alert('Slim supports embedded javascript!')

body
h1 Markup examples

    #content
      p This example shows you what a basic Slim file looks like.

      == yield

      - unless items.empty?
        table
          - items.each do |item|
            tr
              td.name = item.name
              td.price = item.price
      - else
        p
         | No items found.  Please add some inventory.
           Thank you!

    div id="footer"
      = render 'footer'
      | Copyright © #{year} #{author}
