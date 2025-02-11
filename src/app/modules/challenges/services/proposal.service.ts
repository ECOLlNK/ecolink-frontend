import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProposalService {
private baseUrl: string = environment.apiUrl + '/challenge/proposal';
  constructor(private http: HttpClient) { }

  submitProposal(proposal: any) {
    return this.http.post(`${this.baseUrl}`, proposal);
  }
}
