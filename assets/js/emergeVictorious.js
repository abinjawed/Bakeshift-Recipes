function emergeVictorious(player1, player2, firstAttacker) {
  var healthMeter1 = Math.ceil( player1.health / player2.damagePerAttack );
  var healthMeter2 = Math.ceil( player2.health / player1.damagePerAttack );
  if(healthMeter1 < healthMeter2) {
    return player2.name;
  } else if(healthMeter2 < healthMeter1) {
    return player1.name;
  } else {
    return firstAttacker;
  }
}
