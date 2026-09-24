StartupEvents.registry('fluid', event => {
	event.create('catalyst_fluid')
		.stillTexture('kubejs:fluid/catalyst_fluid_still')
		.flowingTexture('kubejs:fluid/catalyst_fluid_still')
		.noBlock
})