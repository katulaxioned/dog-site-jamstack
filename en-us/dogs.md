---
layout: "homepage/index.njk"
pageTitle: "Random dogs"
pageStyle: "dogs/dogs"
pagination:
    data: dogs
    size: 2
    alias: dogs
permalink: "/en-us/dogs/{% if pagination.pageNumber>0 %}{{ pagination.pageNumber + 1 }}{% endif %}/index.html"
---

<!-- Dogs random section start. -->
:::: dogsrandom
## Random dogs

{% for dog in dogs%}
* [![Dog picture]({{dog}})]({{dog}}){target=_blank}
{% endfor %}
::::

{% for link in pagination.hrefs %}
- [{{loop.index}}]({{link}})
{% endfor %}
{.pagination}
<!-- Dogs random section end. -->
