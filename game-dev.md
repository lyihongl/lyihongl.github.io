---
title: Game dev
filename: game-dev.md
remote_theme: pages-themes/slate
plugins:
- jekyll-remote-theme # add this line to the plugins list if you already have one
---
<head>
<script type="text/javascript" id="MathJax-script" async
  src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
</script>
<script>
  MathJax = {
    tex: {
      inlineMath: [['$', '$']]
    }
  };
</script>
</head>


### Random game dev demos

#### 2nd order solver to simulate spring mass damper/pid control

A spring mass system can be modelled by the second order differential equation:

$y + c_1 \frac{dy}{dt} + c_2 \frac{dy^2}{d^2t} = x + c_3 \frac{dx}{dt}$
where $y$ is the state of our object that we wish to control, and x is the target vector.
For example, if we wanted to rotate an image to a specific angle, y would be our current angle, and x would be the target angle.
Then depending on the parameters $c_1, c_2, c_3$, we can simulate, underdamped, overdamped, and perfectly damped systems.
Here is a demo that is using Runga-Kutta 4 to find a numerical solution to the above diff eq. The image is being rotated to an angle
with an underdamped spring, thus it over rotates and bounces back and forth.

![rotate-1](./gifs/rotate-1.gif)

#### Procedurally animated legs

#### Procedurally animated worm/rope