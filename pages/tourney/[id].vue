<template lang="pug">
.phases
	.phase(v-for="phase in phases")
		.phase-elimination(v-if="phase.type === 1")
			.phase-tour(v-for="tour in phase.tours")
				.phase-game(v-for="game in tour")
					.game-teams
						.game-team(v-for="team in game.teams")
							.team-players
								.team-player(v-for="player in team.players") {{ player.name }}
							.team-score {{ team.score || '-' }}
</template>

<script setup>
import { graphElimination } from './mocks';

const getPhases = () => {
	const phasesResult = [];
	const graph = graphElimination;

	const phasesLocal = graph.phases;

	phasesLocal.forEach(phase => {
		const data = phase;
		const tourCount = phase.games.reduce((acc, game) => game.tour > acc ? game.tour : acc, 0);

		data.tours = [];

		for (let i = 1; i < tourCount + 1; i++) {
			data.tours.push(phase.games.filter(game => game.tour === i));
		}

		phasesResult.push(data);
	});

	return phasesResult;
}

const phases = ref(getPhases())
</script>

<style lang="sass">
	.phase:not(:last-child)
		margin-bottom: 25px

	.phase-elimination
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