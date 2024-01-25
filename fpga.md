---
title: FPGA
filename: fpga.md
layout: default
---

### Implementing an SPI controller for a DAC:

#### Jan 23:

![spi_debug](/photos/spi_debug.jpg)
Debugging waveforms for SPI controller. If you notice, the output waveform only has 23 bits, however the standard specifies the output
should contain 24 bits. I had to add an additional transition state to fix this issue.

#### Jan 24:

Turns out my original controller design was very stupid and didn't synthesize, I remade it with much simpler code and now it works :)


### Making interfaces show up properly in Vivado

We need to properly annotate our ports with the xilinx interface info:

```verilog
    module test_ram_2(
        input clk,
        input ready,
        (* X_INTERFACE_PARAMETER = "MODE Master, MASTER_TYPE BRAM_CTRL, MEM_SIZE 8192, MEM_WIDTH 32, MEM_ECC NONE, READ_WRITE_MODE READ_WRITE, READ_LATENCY 1" *)
        (* X_INTERFACE_INFO = "xilinx.com:interface:bram:1.0 BRAM_CTRL DOUT" *) input [31:0] data_read,
        (* X_INTERFACE_INFO = "xilinx.com:interface:bram:1.0 BRAM_CTRL ADDR" *) output reg [31:0] addr,
        (* X_INTERFACE_INFO = "xilinx.com:interface:bram:1.0 BRAM_CTRL CLK" *) output ram_clk,
        (* X_INTERFACE_INFO = "xilinx.com:interface:bram:1.0 BRAM_CTRL DIN" *) output reg [31:0] data_out,
        (* X_INTERFACE_INFO = "xilinx.com:interface:bram:1.0 BRAM_CTRL EN" *) output reg en,
        (* X_INTERFACE_INFO = "xilinx.com:interface:bram:1.0 BRAM_CTRL RST" *) output reg ram_rst,
        (* X_INTERFACE_INFO = "xilinx.com:interface:bram:1.0 BRAM_CTRL WE" *) output [3:0] wen,
        output reg test_output
    );
```

Then in the block diagram it will show up properly as a BRAM control master interface

![bram_ctrl](/photos/bram_ctrl.png)