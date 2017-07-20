@oheydrew's version of the OdinProject "Etch-a-sketch" project.

Have a look at it at https://oheydrew.github.io/etch/

This was my first JS project and I set myself some goals:

- **Base/"pure" JS only - No jQuery** (wanted to understand the magic before jQuery applied it - this was actually really hard and arguably a waste of time. I'd argue it's not worth doing?)
- **Tried to keep functions separate and reusable** as well as attempting to heavily comment what I was doing
- **CSS and CSS Grid Based** (Heavily leaned on CSS- used CSS3 Grids a lot as a base for the project and surrounding pretties)
- **Fully responsive to screen widths** leaning on the css Vh, Vw and Vmin units of scale. Try grabbing the browser window and changing the size!

In the end, **I spent way too much time on this**, and it ended up way more indepth than the JS exercise asked for. I'm aware of this- but I made the concious decision to take it further, in order to teach myself CSS techniques and pure JS etc. I did this slowly, and methodically, trying to learn and understand everything I did. I think it paid off, for me, at least.

Following is a braindump log of each session. Consider it "notes", and probably isn't useful to anyone but me. :)

----

###### *Log 11 - 20/07/17*  
Right! It's finally done, and it's WAY off-track for the project specced. I got way sidetracked by the CSS / Layout element and ended up spending a LONG time working on that. And I also decided to use Pure JS rather than jQuery, which meant a LOT of searching for the pure JS solutions to easily solved jQuery problems.

End of the day- did I learn from it? Yes, I think I did learn a lot about CSS, especially newer stuff like CSS3 Grids and Flexbox and such. As such, it looks pretty neat. Not perfect, I couldn't get the input boxes to align to the bottom perfectly and I decided to leave it, as I've spent WAY too much time on this project.

----

###### *Log 10 - 19/07/17*  
Had an hour here today to optimise the code. It was taking ages to load large grids, had to restructure the code so it wasn't using "innerHTML +=" and used "appendChild" instead. Muuuch nicer.

All that's left is colour, and I'm so done.

----

###### *Log 9 - 11/07/17*  
Spent a lot of time on this today. Want to get it "done", soon, and move on to rails etc. I'm wasting time (??) on stuff like CSS and layout and viewports and such- as such this whole thing is essentially flexible and will resize on the fly as the window is resized, which is neat! Ultimately, kind of pointless for this exercise, but I figure I'm learning two things at once.

Finally did away with the old Alert! style grid size input. Added an input text box, a set button, clear button, and structured it all within a larger CSS Grid and got silly with styling. Almost at the point where I'm happy with it- want to make colours changeable. Nearly done, I think.

----

###### *Log 8 - 11/07/17*
Ok! Whoa, that was a learning experience. Had to learn all about event.target to get it going, but I think I have somewhat os a functional model for how I can detect the mouse is in the cell, and how to colour it. Now to move onto colour selection, etc.

----

###### *Log 7 - 11/07/17*
Progress is moving slow, I'm chasing butterflies like you wouldn't believe, here. Learning all about dynamic and responsive design, and fell into a CSS rabbithole for a while. Managed to figure out how to keep the grid 1:1 and responsive to the window size with the 'vmin' unit scaler. Very cool. Very off-track, but I learned a *lot* about CSS grids, and dynamic sizing and responsive design. What a rabbithole. Sheesh.

Moving on to the task at hand- "mouseenter" for the grid cells. Harder than I thought, without jQuery (And I do not want to use jQuery, I want to kind of work from the ground up. But it's like bashing my head against the wall a little.)

----

###### *Log 6 - 04/07/17*
Started coding quite tired, today, but managed to do some things. Probably won't remember what all these things are- Might be learing the dreaded "Coding while tired is a bad idea" lesson, haha. Anyway, today I got JS to adjust the --rowCount and --colCount variables in CSS, according to input the user can give it through a prompt. It updates the CSS variables, then pulls them back and throws them in an alert text to verify it worked, then runs a "killGrid" function to wipe the grid, then rebuild it using good ol' buildGrid() I'm beginning to wonder whether using CSS variables in this case is really all that *useful*, but then again, this whole CSS3 grid concept is way beyond the original brief, so I might as well keep noodling and learning.

----

###### *Log 5 - 24/06/17*
Wow, learned a lot in the last few sessions! So, CSS3 Grids are really cool. I've figured out how to use CSS Variables to set the grid size (unnecessary probably but also, cool to learn), how to extract that to JS, and using those variables, create a 16x16 grid (Actually, any size I input as the --rowCount and --colCount vars in CSS). Can then multiply the two variables to get the total number of cells, then create x number of div's with the .cell class, which populate the grid automatically. Neat!

Next, I'll work on detecting what cell my mouse is in, and colouring the cell background.

---

###### *Log 4 - 20/06/17*
Few days have gone by, getting back into it. Going to use a CSS3 Grid, and I've been learning about CSS variables and how I can define them using JS. I *know*, this is a little outside of the scope of this simple project
but now I'm genuinely curious about grids and whether it can be achieved this way.

Will likely still do a table-based pure JS version also.

----

###### *Log 3 - 16/06/17*
OK. 6 hours today and I have jack-all in the way of ACTUAL CODE but I've learned a whole heap, from div elements through to CSS grid techniques, the new CSS3 GRID style, older flexbox styles and right back to good ol' Tables. Done for today, but plan to get back into it tomorrow. Will use CSS3 Grids as they're *so hot right now*. If I want back-compatibility maybe I'll stretch-goal to make it again using tables. That'd teach me something about backward compatibility stuff, too.

---

###### *Log 2 - 16/06/17*
4 hours in and already a bit lost. Realised everything is a bit daunting at this stage. Need to break it down.

So: I need to make an etch-a-sketch. This is a JS exercise, so I need JS to create most my elements, essentially. That's the brief. So
- Create a 16x16 (variable?) Grid of div's
 - Grid will be ordered by Row, with 16 Columns? Essentially a heap of separate Div's nested in each Row Div.
 - Still hazy on how to make Div's span horizontally vs vertically, need to read up on divs? Classes?
- Determine whether the mouse is within a grid cell. That cell will need to change colour. According to predetermined colour etc

Ok. Time to read up on Div elements.

---

###### *Log 1 - 16/06/17*
"Etch-a-sketch" Odinproject CSS site. WIP, blank slate. Having to brush up on simple HTML + CSS, but it's happening.

The whole point of this is to get myself used to using the tools. As such, I'm making myself use:  

- unix terminal for all file manipulation
- atom for editing
- git to keep track + version control
- google inspector for inspectin'
- MDN and other docs for .js queries

*phew*. Here goes.
