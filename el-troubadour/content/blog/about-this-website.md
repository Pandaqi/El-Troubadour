---
title: "About This Website"
date: 2021-05-25T22:57:00+02:00
draft: false
include_toc: true
tags: ["Web Design", "Development"]
---

Now more than ever, a musician's online presence is vital to their success. Because I absolutely despise social media and have not used it in the past 6+ years, I needed to compensate with my website :p

Fortunately, I am a programmer and web developer, and the decision was easily made to create my own website from scratch.

In this article, I'll explain the process of developing the website, its visual design, its navigation, and the tools I used for that. 

(Or, well, I give you a very quick summary of it. I don't want to post large, complex coding tutorials on my music website.)

## Step 1: what do I need?

Design is all about structure. My first step is always to create a hierarchy of all components and functionality.

So, why would people normally visit an artist's website?
* To learn more about the artist behind a song they heard
* To discover or browse their music
* To get any news or updates about their work
* To get tour dates or info on live performances
* To find their social media
* To buy merchandise.

Because of health issues, I cannot do the "live performance" thing. So cross that off the list.

Because I do not use social media &mdash; and don't see that changing soon &mdash; I can cross that off as well.

Lastly, I find it a bit pretentious to start a whole merchandise thing when you haven't even professionally released a single album yet, and your only fans are friends and family. Additionally, I'm already working on creating a webshop for my other work (writing, designing, etc.), so if need be, I can put my merchandise there.

This leaves us with only a few reasons to visit the website: get info about me, find all my albums, get news and updates.

As such, I put these front and center. The homepage gives an overview of both my albums and the latest news. At the top (in the "header") is a custom menu with quick links to everything, and at the bottom (in the "footer") it's the same.

Obviously, you don't want to overwhelm people with ALL the news or ALL the albums. It just shows the latest few.

But ... I am a very practical person that always wants to help/teach other people. (Hence the writing of this article.) 

After some consideration, I decided to include the chords/lyrics/tabs for all my songs on the website as well! Gives people a good reason to visit my website (if they already know some of my music). It is, however, not one of the core reasons for visiting, which is why it's not so prominently featured.

That's all.

## Step 2: lessons from previous work
All my other websites (plus many that aren't online anymore) were also handmade by yours truly, which taught me some good lessons.

These lessons directly informed all my decisions for this website's design. So by talking about these, you'll also understand why I made the website the way it is.

### Lesson 1: WordPress is slow
If you don't know, WordPress is basically the oldest, most-used CMS (Content Management System) all over the world. And yes, it does the job, it's free. But it's just way too slow and clunky, and I vowed to never use it again.

The same is true for many other "big" and "well-known" systems. Because they are so old, they also use deprecated technology, and have become way too large. (Unless I do some heavy optimization, a default WordPress page can take 1-2 seconds to load on a regular shared hosting.)

Instead, I try to switch to the most modern, minimalist, suitable framework I can find at the time. Keeps me on my toes as a web developer as well.

For this website, I used [Hugo](https://gohugo.io). It was my first encounter with a "static site generator", which lead to a steep learning curve at first, but within a day or two I was already enjoying it MUCH more than any other system.

### Lesson 2: Stop putting everything at the top!
Sooo many websites have this huge logo at the top of _every page_, including all sorts of links, navigation, menus, submenus, other big images and things to click.

It's overwhelming. It takes up way too much space, for something I'll rarely need. I need to scroll past it on every page.

Why do people need navigation? Because they've just looked at the current content, and want to learn more, or go somewhere else, or go somewhere related.

So the most logical thing to do, in my opinion, is to place _related links_ at the _bottom_ or _in the article itself_.

For example, the **tabs** don't have their own button in the menu ... because why would they? If I created a page with a list of all the tabs, it would be a messy bundle of tabs from different albums. Rarely does someone think "hey, let's just look up a _random tab_ from this musician and learn to play it"

@TODO: Image of that here?

No, they are actively looking for that song or its corresponding album. As such, each album has a section on the page that simply lists all the matching tabs. (And albums that don't have these, simply don't show that section.)

Another example is the fact that the header _collapses_ on all pages except the homepage. This makes it as small as possible, without losing the functionality (or nice aesthetic).

### Lesson 3: Stop hiding stuff!
I'm a bit split on those "hamburger menus". You know, the ones that you need to click on, so that a menu folds out with all the navigation options. Mostly prevalent on mobile. I have several problems with it:
* It's at least two clicks to get somewhere.
* You don't know _what_ is on the website or _where_ you could possibly go, until you click it and inspect that menu
* It's usually at a top corner of the screen, a tiny icon next to a logo or heading, which is hard to reach. (Although I'm also guilty of this myself on this website ... )

That being said, it does clean up the interface nicely and many people know what it does these days.

But, like always, I eventually came back to my core principle: solve problems by keeping it simpler, not by inventing fixes (such as _hiding_ the real navigation). Websites are designed to display information, visual designs are a way to structure that information. Simply _hiding_ everything in different ways and different places completely goes against that purpose.

That's why both my header and footer only have four links. Just the most important things. Just the things you'd want to directly visit from any location.

### Lesson 4: Don't underestimate the power of hierarchy
Of course, the question arises: what if people don't want to go to these standard pages? 

For example, I make music in many different genres, and post things on the blog of different types (news, tabs, album diaries, etc.). How do people quickly find these? 

For that, I employed the "tag system".

Everything in the website has a clear set of tags displayed next to them. Why?
* As I said, they are essential to keeping clear structure to my blog and discograpy.
* It was a way to add _loads of color_ to an otherwise black-and-white design.
* I have to display basic information (such as date of publishing) anyway, so why not make the layout consistent, and display all other related information in the same way?
* By clicking them, you go to an overview page showing _everything_ that has this tag.

It's not perfect, sure. But I think it looks clean and fun, and allowed me to get anywhere I want within one or two clicks. And all of that _without_ a huge, bulky, overwhelming navigation.

### Lesson 5: Don't Repeat Yourself
Continuing on the last lesson, I wanted to build this website in a modular way.

Some of my previous websites were, to put it mildly, a HORROR SHOW. When I made them, I naively thought "this is how they will work, so let's just quickly write all the code to make that functionality!"

And then ... it turned out the website needed to do something else as well. And it was too slow. Or it was hard to reach certain parts, or the website looked inconsistent between mobile and desktop.

Long story short: by making these mistakes, you learn the power of clean coding and good programming practices.

The "Hugo" system allows you to create "partials" that you can include anywhere you want. This website is nothing more than a few basic HTML files, calling a handful of those partials:
* Tag-list: to nicely display the tags associated with a post
* Album-cover: to display images + their nice layout (with the border, the drop-shadow, the color, etc.)
* Album-summary: when displaying an album in a list/overview
* Post-summary: when displaying a post in a list/overview

Most files are just 10-20 lines of code, doing exactly what you think they do. I like that. 

It even enabled me to create overviews that show _both albums and posts_, each with their own summary formatting! This happened on accident, to be honest, but I was happily surprised when it just worked and looked great.

During development, there were many times when I realized I had to completely switch to a new system, or implement new functionality. Because I made everything modular, this was usually just 10 minutes of work.

## Step 3: about the visual design
When you've been designing for long enough, things just pop into your head. That's both a good thing and a bad thing (because I can't really explain why I did something or where it came from).

### General components
The background is a beige-white texture of crumpled old paper. I like that look in general, but thought it fit very well with the general "sheet music" design. Additionally, it adds some variety to a design that would otherwise just be black-on-white.

The header and footer are the way they are ... because that's how I drew them the first time. I was probably inspired by something, but I don't know what.

The headings (showing a treble clef + the typical lines for sheet music) were a relic of the past. Years ago I already sketched a design for a music website - those headings were a core component of that.

@TODO: Image here? 

### Tags
And because the main design was all black-and-white, I knew I wanted splashes of color. That's why all **tags** and regular **links** have a random color (from a list of 10 possible colors). I use a very simple JavaScript script for this. With at most 20-30 of these per page, it's more than fast enough.

@TODO: Image here?

### Fonts
The fonts were picked from a list of "nice fonts I want to use someday". I always keep those lists around, because you never know when you stumble upon a cool font, or color scheme, or image, or whatever. Usually, I cannot immediately use such a discovery, but I can save it for later.

Originally, I wanted to design my own font for the headings. I'd already designed some core features and half the alphabet. But ... my workload was huge at the time, and I just felt like _designing my own font_ was a pressure I didn't need. I wanted this website design done, so I could put it online, and start publishing my music. Maybe someday later, I will create it and implement it.

@TODO: Image here?

### Album Borders
One final touch, that makes more difference than you'd think, are the coloured borders around albums. Without a border, the album covers just looked ... out of place. Like they were haphazardly thrown onto the page, floating above the content.

But giving everything the same black or white color, would be boring. (And, given how thick those borders are, probably too attention-grabbing.)

Instead, I invented my own parameter that I can set for each album, which simply determines the color used for the border. (I thought about randomly selecting that as well, but then you have no guarantee that it fits with the artwork, so I scrapped that.)

@TODO: Image here?

### Icons
Lastly, the icons in the header were just drawn on the fly. That works fine for me. If I start overthinking my icon/logo design, I _always_ make it too complex and detailed, which is &mdash; who would've thought &mdash; the worst thing that a small icon could be.

The icon for the "about" page is simply the logo for myself and my music, which I already drew years ago, but simplified and completely white. I still really like that logo and will probably continue using it everywhere.

And yes, that's really all there is. I try to be very minimalistic and to-the-point in my work. Why make something large and complicated, if you can keep it small and simple?

## Step 4: tricks and flair
Okay, so, it's a music website.

What cool stuff can we do with music and audio? What will show the world that I'm a musician to be reckoned with!? How will my website revolutionize both music _and_ websites?!

### Music player
Obviously I wanted to add a music player.

The problem? When you switch pages, it would stop playing! (Because the web is stateless. It simply CANNOT continue streaming a song if you actually switch to a different webpage.)

To solve that, you need to create a "one page website". This means it's a single file, which loads in other pages via some scripting magic, and replaces the content of the page, whenever you navigate to somewhere else.

These websites are complex. A lot of scripting necessary. A lot can go wrong. (I'm continually frustrated by the fact that my Gmail often doesn't register what I do, because it's still loading stuff in the background when I tried to delete an email.)

They also don't work with Hugo (or any other content management systems). You'd need one specifically designed for this, or code it yourself.

It's just not worth the effort, to me. It would make the website slower, harder to index and navigate, and introduce many headaches ... when all I want is a simple, nice, cozy home for all my musical work.

The second best option is to just open a music player in a new window (or new tab). That one can just stay open, while a user continues browsing the website. But ... pop-ups are usually blocked, and I don't want to add the text "will open in a new window" or "open this in a new window if you want to listen without pauses" absolutely everywhere.

You know what, music services exist for a reason.

Each album page has clear buttons at the top leading to all the different music services that host my music. So you can just use your favourite app/website, which has all the functionality for perfect, flawless music playing _built in_. And if that's not enough, I added an embedded playlist for each album as well, so you can still immediately listen on the website.

Yes, an integrated music player, that never stops, that can be played/browsed/shuffled from anywhere would be cool. It would also take me at least two months to create it, and it would make the website worse, and be subpar to any other music player out there. Nice trick, not worth it.

### Randomized colors
Hugo is a "static site generator". Whenever I'm happy with the website, I type a command to build it (usually takes only a few milliseconds).

This "build" simply contains a bunch of folder and flat text files ... and is also the whole website! I simply upload that to my server and the website is updated.

The advantages are clear:
* Very easy to edit, develop and update on my local computer -> and then push live.
* Extremely fast, because the browser has nothing to process or calculate or whatever. Every page is just a small text file.
* I can catch mistakes before they appear live, work freely on something before releasing it to the world, easily make _large_ changes to the website.

But there is a disadvantage:
* It's a static website. There is no database, no dynamic component, nothing to add variety.
* (It takes some programming knowledge and a different mindset to work with such systems. But that's just me, coming from the old-school PHP and MySQL background.)

To get some variety back, I wrote that little JavaScript snippet. It is _so simple_: just find all links and tags, and randomize their colors using a predefined set of 10 colors (which are just CSS classes). I made sure it didn't pick the exact same color twice in a row, but that was all.

The result? Every page has a nice splash of color on top of it, and it's even different every time you visit!

Normally, from my minimalistic point of view, I try to avoid adding scripts. But this was so small, so simple, with such big results, that I kept it.

### No more tricks
As mentioned before, I'm prone to stuffing my projects full of tricks, ideas, experimental functionality. I've been trying to lose that habit for years now, and this website proves that I was somewhat succesful in doing that.

Yes, it feels boring to me. The website "just works" and "just looks great", but does nothing out of the ordinary.

Yes, I'm still longing for that high-tech integrated music player on the website. Yes, I wanted to make all buttons play a piano note, so you could play a song while navigating the website. Yes, I wanted all sorts of fancy animations, background patterns, and extra stuff.

But I didn't. And that's why this website is so fast, clean, minimal, and made in less than a week (both learning how Hugo works, creating the theme, and populating it with the content).

I'm not saying this to brag, just to remind myself that it's good to stay simple and stay simple, and hopefully prevent others from making that same mistake for years.

### Update: mobile-first
Wow, something I completely forgot to mention, is that this website was designed for mobile first. The majority of website visits come from mobile devices these days. 

(Additionally, trying to use the full width of a computer screen usually only makes a design cluttered, because the text is too wide and the images too big. Ironically, there is _too much space to fill_. Of course, it can be done, and you can use that space for absolutely beautiful websites. But we're talking about a simple musician's website here. I'm not trying to sell expensive products to millions of customers.)

That's why it has a narrow column, even on wider screens. And when the screen gets bigger, the header and footer image are simply ... more visible. The goal was just to have that first diagonal from the header visible on mobile screens, as it provides a nice way to encapsulate the content.

Because of that approach, there were no extra tricks, or scripts, or fixes, or whatever necessary to make this website work on all devices and all browsers.

(My older websites usually have huge chunks of code that say "if the width is less than X, do this, but if it's more than Y, do that, and if it's ... " Annoying. I've been trying to eliminate that with every design, ever since.)

## Step 5: Populate and Enjoy
Populating a new website is always a bit of an odd task.

It's boring, because you're mostly copying existing content, rewriting or formatting some of it, creating links and references everywhere, writing introductions to albums, bla bla.

But it's also cool, because you get to see your website in action, it finally starts to look like a real, living, breathing website that does something useful.

So I pace myself. After creating the main skeleton, I added 4-5 articles per day. (Which meant writing out the chords+lyrics to my songs, adding albums and a description/marketing pitch for them, writing blogs such as this one.) When the design was done, I also already had enough content to test the design to its fullest.

(Something I used to forget all the time, was _pagination_. Because during testing, you only create a handful of test posts. But then the site goes live, you add content, you add content ... and hey, why is the homepage showing ALL THE 35 LATEST POSTS!?)

This is also necessary to make the website look like it's worth something. If you visit a musician's website, and it just has a "Hello world!" blog post, one album, and maybe a short news update somewhere ... that doesn't inspire confidence. It feels like that musician either doesn't care, or stopped actually making music a decade ago.

So even though the work was a bit menial, I am glad I added loads of albums, tabs and blog posts to the website at launch.

(I'm also ashamed to admit that doing so reminded me that I hadn't finished a small EP that was said to "be released very soon". Oh well, you forget things when you try to balance growing up and school with publishing music.)

## Conclusion
That's all I can say about the design and content of this website, without actually becoming very technical and basically writing a how-to guide to creating your own theme in Hugo.

The site is way smaller and simpler than all my others ... but I actually like it a lot. I think it manages to capture my personality and style of music quite well, even when the actual work stretches across many genres.

So that's all for today. A glimpse at how (and why) I made this website, which will hopefully be a nice home for all my musical work for at least the coming years!

Until the next time, 
Tiamo