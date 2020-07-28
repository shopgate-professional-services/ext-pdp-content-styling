# Shopgate Connect - product details content styles

This extension allow styling of content (description, properties) on product details page.

## Configuration

* contentStyles - (json) Styles to apply to portals with content
    * product.description - (json) styles in glamor format
    * product.properties - (json) styles in glamor format

### Default value
```json
{
  "contentStyles": {
    "product.description": null,
    "product.properties": null
  }
}
```

### Styles example (show html table in description as collapsed rows)

Say you have a html table in product description
```html
<table>
    <thead>
        <tr>
            <th>Size</th>
            <th>Euro size</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>S</td>
            <td>48</td>
        </tr>
        <tr>
            <td>L</td>
            <td>50</td>
        </tr>
    </tbody>
</table>
```

To show this table as collapsed rows, set styles to

```json
{
  "contentStyles": {
    "product.description": {
       " table, thead, tbody, th, td, tr": {
         "display": "block"
       },
       " table thead tr": {
         "display": "none"
       },
       " table tr": {
         "marginBottom": "0.5rem"
       },
       " table td": {
         "border": "none",
         "borderBottom": "1px solid #eee",
         "position": "relative",
         "paddingLeft": "50%"
       },
       " table td:before": {
         "content": "''",
         "position": "absolute",
         "top": "6px",
         "left": "6px",
         "width": "45%",
         "paddingRight": "10px"
       },
       " table td:nth-of-type(1):before": { "content": "Size" },
       " table td:nth-of-type(2):before": { "content": "Euro size" }
    },
    "product.properties": null
  }
}
```
the styling result you can see in [demo](./demo/collapsed_rows.jpg)

## About Shopgate

Shopgate is the leading mobile commerce platform.

Shopgate offers everything online retailers need to be successful in mobile. Our leading
software-as-a-service (SaaS) enables online stores to easily create, maintain and optimize native
apps and mobile websites for the iPhone, iPad, Android smartphones and tablets.
