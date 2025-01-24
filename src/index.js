Blockly.Blocks['custom_block'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Custom Block");
    this.appendValueInput("TEXT")
      .setCheck("String")
      .appendField("Text:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};