import { Component, OnInit } from '@angular/core';
import { Mission } from '../../../../core/models/Mission';
import { AuthService } from '../../../../auth/services/AuthService.service';
import { User } from '../../../../core/models/User';
import { MissionService } from '../../services/mission.service';

@Component({
  selector: 'home-missions',
  templateUrl: './missions.component.html',
  styleUrl: './missions.component.scss'
})
export class MissionsComponent implements OnInit {
  missions: Mission[] = [];
  isClient: boolean = false;
  constructor(private missionService: MissionService, private authService: AuthService) { }

  ngOnInit() {
    this.missionService.getMission().subscribe((missions: Mission[]) => {
      this.missions = missions;
    });
    this.authService.getCurrentUser().subscribe((user: User) => {
      this.isClient = user.userType === 'CLIENT';
    });
  }
  completeMission(mission: Mission): void {
    mission.completed = true;
    this.missionService.updateMission(mission).subscribe();
  }
}
