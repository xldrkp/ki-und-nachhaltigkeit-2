# Notes

## Using icons 

When using Boxicons with Astro, you can leverage the pull feature and animations by applying specific classes to your Icon component. Here's how you can do it:

1. Pull Feature:
The pull feature allows you to position the icon relative to text. You can use the `pull-left` or `pull-right` classes.

```astro
---
import { Icon } from 'astro-icon'
---

<Icon name="bx:bxs-book-bookmark" class="bx-pull-left" />
<span>This text will appear to the right of the icon</span>

<Icon name="bx:bxs-book-bookmark" class="bx-pull-right" />
<span>This text will appear to the left of the icon</span>
```

2. Animations:
Boxicons provides several animation classes that you can apply to your icons:

```astro
---
import { Icon } from 'astro-icon'
---

<Icon name="bx:bxs-book-bookmark" class="bx-spin" />
<Icon name="bx:bx-rotate-right" class="bx-rotate-90" />
<Icon name="bx:bx-rocket" class="bx-tada" />
<Icon name="bx:bx-heart" class="bx-flashing" />
```

Available animation classes include:
- `bx-spin`: Rotates the icon continuously
- `bx-rotate-90`: Rotates the icon 90 degrees
- `bx-rotate-180`: Rotates the icon 180 degrees
- `bx-rotate-270`: Rotates the icon 270 degrees
- `bx-flip-horizontal`: Flips the icon horizontally
- `bx-flip-vertical`: Flips the icon vertically
- `bx-tada`: Applies a tada animation
- `bx-flashing`: Makes the icon flash
- `bx-burst`: Applies a burst animation
- `bx-fade-up`, `bx-fade-down`, `bx-fade-left`, `bx-fade-right`: Fading animations

3. Combining Features:
You can combine multiple classes for more complex effects:

```astro
<Icon name="bx:bxs-book-bookmark" class="bx-pull-left bx-spin" />
```

4. Custom CSS:
If you need more control, you can apply custom CSS to the Icon component:

```astro
<Icon name="bx:bxs-book-bookmark" style="color: red; font-size: 2em;" />
```

Remember that to use these Boxicons-specific classes, you might need to include the Boxicons CSS in your project. You can do this by adding the following to your Astro project's head:

```html
<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
```

### Boxicons Cheat Sheet

- <https://boxicons.com/cheatsheet>