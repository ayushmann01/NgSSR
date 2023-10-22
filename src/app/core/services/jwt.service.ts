import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class JwtService {
  token: string = '';

  getToken(): string {
    // return (global as any).localStorage['jwtToken'];
    return this.token;
  }

  saveToken(token: string): void {
    this.token = token;
  }

  destroyToken(): void {
    // window.localStorage.removeItem('jwtToken');
    this.token = '';
  }
}
