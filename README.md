# Pricing-Component-w-Toggle-TLP
__Frontend Mentor Project__

![Design preview for Pricing Component with Toggle Challenge](./design/desktop-preview.jpg)

## My Challenge

My challenge was to build out this pricing component and get it looking as close to the design as possible.

I needed a basic understanding of HTML, CSS, and JavaScript to complete this challenge. 

My users should be able to:

- View the optimal layout for the component depending on their device's screen size
- Control the toggle with both their mouse/trackpad and their keyboard

There was a  **Bonus** Part of the Challenge: Complete the challenge with just HTML and CSS. I did try to code the toggle switch functionality using CSS. However, I decided to use JavaScript. 

## Background

### New Information I Learned
I found a new way to position my labels beside my toggle switch. I thought about using <span></span> elements before and after my <input> element. Then I found out I could add the labels using just CSS. I used the **before** and **after** pseudocodes to place labels to the sides of the toggle switch.

```
.toggle__container .switch::before {
    content: "Annually";
    position: absolute;
    left: -100%;
    transform: translateX(-50%);
    color: $lt-grayish-blue;
}

.toggle__container .switch::after {
    content: "Monthly";
    position: absolute;
    right: -200%;
    transform: translateX(-50%);
    color: $lt-grayish-blue;
}
```
I had never used this technique before, but now I see the value in including it in my code. 

### Techniques I Used
As I said earlier, I did try to use CSS for my toggle switch functionality. However, it was easier to use Vanilla JS. I added an **addEventListener** for the toggle switch instead of using **onclick** in HTML code. I refered to [JavaScript HTML DOM EventListener](https://www.w3schools.com/js/js_htmldom_eventlistener.asp) on the W3Schools website. 

I also used **SASS** for this project. 

## Completed Design
You can view my final design here: [Pricing Component with Toggle](https://tlanetterose.github.io/Pricing-Component-w-Toggle-TLP/)

Web Developer: [T.Lanette Pollard](https://github.com/TLanetteRose). 

## Attribution
Challenge by [Frontend Mentor](https://www.frontendmentor.io/challenges)









