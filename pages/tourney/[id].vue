<template lang="pug">
.phases
	.phase(v-for="phase in phases")
		.phase-elimination(v-if="phase.type === 1")
			.phase-stage(v-for="stage in phase.stages")
				.phase-tour(v-for="tour in stage.tours")
					.phase-game(v-for="game in tour.games")
						.game-teams
							.game-team(v-for="team in game.teams")
								.team-players
									.team-player(v-for="player in team.players") {{ player.name }}
								.team-score {{ team.score || '-' }}
</template>

<script setup>
import { graphElimination } from './mocks';

const phases = ref(graphElimination.phases)
</script>

<style lang="sass">
	.phase:not(:last-child)
		margin-bottom: 25px

	.phase-stage
		display: flex

	.phase-tour
		display: flex
		flex-direction: column
		justify-content: center
		margin-right: 4rem

	.phase-game
		border: 0.1rem solid white
		margin-bottom: 4rem

	.game-team
		padding: 0.5rem
		display: flex
		justify-content: space-between
		border-bottom: 0.1rem solid white

	.team
		&-players
			display: flex
			margin-right: 1.5rem

		&-player
			&:not(:last-child)
				margin-right: 2.5rem
</style>