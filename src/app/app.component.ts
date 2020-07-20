import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  loading = true;
  theme = localStorage.getItem('theme') === 'default' ? 'default' : 'dark';
  loadCss(href: string) {
    const style = document.createElement('link');
    style.type = 'text/css';
    style.href = href;
    style.rel = 'stylesheet';
    document.body.append(style);
  }
  loadScript(src: string) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = resolve;
      script.onerror = reject;
      document.body!.appendChild(script);
    });
  }

  toggleTheme() {
    if (this.theme === 'dark') {
      this.theme = 'default';
    } else {
      this.theme = 'dark';
    }
    localStorage.setItem('theme', this.theme);
    document.documentElement.className = this.theme;
    this.loadThemeAssets();
  }

  loadThemeAssets() {
    if (environment.production) {
      this.loadCss(`./${this.theme}.css`);
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    } else {
      this.loadScript(`./${this.theme}.js`).then(() => {
        this.loading = false;
      });
    }
  }
  ngOnInit() {
    this.loadThemeAssets();
  }
}
