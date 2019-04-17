import { Component, Prop } from "@stencil/core";

@Component({
  tag: "k-button",
  styleUrl: "./k-button.scss",
  shadow: true
})
export class KButton {
  @Prop() type: "basic" | "raised" | "outline" | "flat" = "basic";
  @Prop() color: "plain" | "primary" | "secondary" | "danger" = "plain";
  @Prop() size: "sm" | "md" | "lg" | "xl" = "sm";

  render() {
    return (
      <button class={`${this.type} ${this.color} ${this.size}`}>
        <slot />
      </button>
    );
  }
}
