export class SettingsService {

  private coloredBackground: boolean = false;

  setBackground(isColored: boolean) {
    this.coloredBackground = isColored;
  }

  isColoredBackground() {
    return this.coloredBackground;
  }
}
