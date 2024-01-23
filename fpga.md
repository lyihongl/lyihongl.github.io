---
title: FPGA
filename: fpga.md
layout: default
---

Implementing an SPI controller for a DAC:
![spi_debug](/photos/spi_debug.jpg)
Debugging waveforms for SPI controller. If you notice, the output waveform only has 23 bits, however the standard specifies the output
should contain 24 bits. I had to add an additional transition state to fix this issue.