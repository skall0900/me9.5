ServerEvents.recipes(event => {
	event.remove({ output: 'creaturefeature:scroll_bi' })
	event.remove({ output: 'creaturefeature:scroll_pride' })
	event.remove({ output: 'creaturefeature:scroll_pan' })
	event.remove({ output: 'creaturefeature:scroll_trans' })
	event.remove({ output: 'createutilities:polished_amethyst' })
	event.remove({ output: 'createutilities:graviton_tube' })
	event.remove({ output: 'createutilities:void_steel_ingot' })
	event.remove({ output: 'createutilities:void_tank' })
	event.remove({ output: 'createutilities:void_chest' })
	event.remove({ output: 'createutilities:void_motor' })
	event.remove({ output: 'createutilities:void_battery' })
	event.remove({ output: 'sophisticatedbackpacks:stack_upgrade_tier_3' })
	event.remove({ output: 'sophisticatedbackpacks:stack_upgrade_tier_4' })
	event.remove({ output: 'sophisticatedbackpacks:stack_upgrade_omega_tier' })
	event.remove({ output: 'dndesires:hydraulic_press' })
	event.remove({ output: 'dndesires:industrial_fan' })
	event.remove({ output: 'dndesires:gold_mixer' })
	event.remove({ output: 'create_aeronautics_toolgun:magnetic_gun' })
	event.remove({ output: 'create_aeronautics_toolgun:portable_structure_container' })
	event.remove({ output: 'create_aeronautics_toolgun:survival_structure_tool' })
	event.recipes.create.sequenced_assembly(
      [
        CreateItem.of('kubejs:hydraulic_mechanism', 1)
      ],
      'create:copper_sheet', 
      [
        event.recipes.create.deploying('kubejs:incomplete_hydraulic_mechanism', ['kubejs:incomplete_hydraulic_mechanism', 'create:iron_sheet',]),
		event.recipes.create.deploying('kubejs:incomplete_hydraulic_mechanism', ['kubejs:incomplete_hydraulic_mechanism', 'simulated:spring',]),
        event.recipes.create.deploying('kubejs:incomplete_hydraulic_mechanism', ['kubejs:incomplete_hydraulic_mechanism', 'create:fluid_pipe',]),
        event.recipes.create.deploying('kubejs:incomplete_hydraulic_mechanism', ['kubejs:incomplete_hydraulic_mechanism', 'create:fluid_pipe',]),
		event.recipes.create.deploying('kubejs:incomplete_hydraulic_mechanism', ['kubejs:incomplete_hydraulic_mechanism', 'minecraft:glass',]),
		event.recipes.create.deploying('kubejs:incomplete_hydraulic_mechanism', ['kubejs:incomplete_hydraulic_mechanism', 'electroenergetics:copper_wire',]),
      ]
    )
    .transitionalItem('kubejs:incomplete_hydraulic_mechanism')
    .loops(3)
	event.recipes.create.sequenced_assembly(
      [
        CreateItem.of('kubejs:thermal_mechanism', 1)
      ],
      'create:sturdy_sheet', 
      [
        event.recipes.create.deploying('kubejs:incomplete_thermal_mechanism', ['kubejs:incomplete_thermal_mechanism', 'create:sturdy_sheet',]),
		event.recipes.create.filling('kubejs:incomplete_thermal_mechanism', ['kubejs:incomplete_thermal_mechanism', Fluid.of('minecraft:water', 250)]),
		event.recipes.create.filling('kubejs:incomplete_thermal_mechanism', ['kubejs:incomplete_thermal_mechanism', Fluid.of('minecraft:lava', 250)]),
		event.recipes.create.deploying('kubejs:incomplete_thermal_mechanism', ['kubejs:incomplete_thermal_mechanism', 'simulated:spring',]),
		event.recipes.create.deploying('kubejs:incomplete_thermal_mechanism', ['kubejs:incomplete_thermal_mechanism', 'create:copper_sheet',]),
		event.recipes.create.pressing('kubejs:incomplete_thermal_mechanism', 'kubejs:incomplete_thermal_mechanism')
      ]
    )
    .transitionalItem('kubejs:incomplete_thermal_mechanism')
    .loops(4)
	event.shapeless(
	Item.of('kubejs:lavender_quartz', 1), 
	[
    'minecraft:quartz',
    '4x minecraft:amethyst_shard',
    '4x phantasm:crystal_shard'
	]
	)
	event.recipes.create.sandpaper_polishing('kubejs:polished_lavender_quartz', 'kubejs:lavender_quartz')
	event.shaped(
		Item.of('createutilities:graviton_tube', 1),
		[
		' A ',
		' C ',
		' B '
		],
		{
			A: 'kubejs:polished_lavender_quartz',
			B: 'createutilities:void_steel_sheet',
			C: 'creaturefeature:blitz_rod'
		}
	)
	event.recipes.create.sequenced_assembly(
      [
        CreateItem.of('kubejs:void_mechanism', 1)
      ],
      'createutilities:void_steel_sheet', 
      [
        event.recipes.create.deploying('kubejs:incomplete_void_mechanism', ['kubejs:incomplete_void_mechanism', 'createutilities:graviton_tube',]),
		event.recipes.create.filling('kubejs:incomplete_void_mechanism', ['kubejs:incomplete_void_mechanism', Fluid.of('create_dragons_plus:dragon_breath', 200)]),
		event.recipes.create.filling('kubejs:incomplete_void_mechanism', ['kubejs:incomplete_void_mechanism', Fluid.of('create_enchantment_industry:experience', 1000)]),
		event.recipes.create.deploying('kubejs:incomplete_void_mechanism', ['kubejs:incomplete_void_mechanism', 'creaturefeature:dream_silk',]),
		event.recipes.create.deploying('kubejs:incomplete_void_mechanism', ['kubejs:incomplete_void_mechanism', 'creaturefeature:bacterium_ball',]),
		event.recipes.create.pressing('kubejs:incomplete_void_mechanism', 'kubejs:incomplete_void_mechanism')
      ]
    )
    .transitionalItem('kubejs:incomplete_void_mechanism')
    .loops(5)
	event.recipes.create.mixing('createutilities:void_steel_ingot', ['minecraft:netherite_ingot', '4x minecraft:ender_pearl', '4x creaturefeature:minedflayer_goop']).superheated()
	event.shaped(
		Item.of('createutilities:void_motor', 2),
		[
			' M ',
			'SCS',
			' F '
		],
		{
			M: 'kubejs:void_mechanism',
			S: 'create:sturdy_sheet',
			C: 'createutilities:void_casing',
			F: 'create:shaft'
		}
	)
	event.shaped(
		Item.of('createutilities:void_chest', 2),
		[
			' M ',
			'SCS',
			' F '
		],
		{
			M: 'kubejs:void_mechanism',
			S: 'create:sturdy_sheet',
			C: 'createutilities:void_casing',
			F: Ingredient.of('#c:chests')
		}
	)
	event.shaped(
		Item.of('createutilities:void_tank', 2),
		[
			' M ',
			'SCS',
			' F '
		],
		{
			M: 'kubejs:void_mechanism',
			S: 'create:sturdy_sheet',
			C: 'createutilities:void_casing',
			F: 'create:fluid_tank'
		}
	)
	event.shaped(
		Item.of('createutilities:void_battery', 2),
		[
			' M ',
			'SCS',
			' F '
		],
		{
			M: 'kubejs:void_mechanism',
			S: 'kubejs:polished_lavender_quartz',
			C: 'createutilities:void_casing',
			F: 'electroenergetics:accumulator'
		}
	)
	event.shaped(
		Item.of('create_aeronautics_toolgun:magnetic_gun', 1),
		[
			'SCS',
			'VMA',
			'SCA'
		],
		{
			S: 'create:sturdy_sheet',
			C: 'create:copper_sheet',
			V: 'phantasm:void_crystal_shard',
			M: 'kubejs:void_mechanism',
			A: 'createdeco:andesite_sheet'
		}
	)
	event.shaped(
		Item.of('create_aeronautics_toolgun:survival_structure_tool', 1),
		[
			'BCC',
			'VMF',
			'BSS'
		],
		{
			B: 'create:brass_sheet',
			C: 'create:copper_sheet',
			V: 'phantasm:void_crystal_shard',
			M: 'create:precision_mechanism',
			F: 'create:empty_schematic',
			S: 'create:sturdy_sheet'
		}
	)
	event.shaped(
		Item.of('create_aeronautics_toolgun:disposable_vehicle_container', 1),
		[
			' A ',
			'AGA',
			' A '
		],
		{
			A: 'createdeco:andesite_sheet',
			G: 'netherexp:soul_glass'
		}
	)
	event.shaped(
		Item.of('create_aeronautics_toolgun:portable_structure_container', 1),
		[
			'SCV',
			'CMC',
			'VCS'
		],
		{
			S: 'create:sturdy_sheet',
			C: 'create:copper_sheet',
			V: 'phantasm:void_crystal_shard',
			M: 'kubejs:void_mechanism'
		}
	)
  event.shaped(
		Item.of('dndesires:hydraulic_press', 1),
		[
			' M ',
			'NCN',
			' B '
		],
		{
			M: 'kubejs:hydraulic_mechanism',
			N: 'dndecor:large_netherite_chain',
			C: 'create:copper_casing',
			B: 'minecraft:copper_block'
		}
	)
	event.shaped(
		Item.of('dndesires:industrial_fan', 1),
		[
			' IC',
			'GBP',
			' MC'
		],
		{
			M: 'kubejs:thermal_mechanism',
			C: 'dndecor:large_netherite_chain',
			B: 'dndesires:industrial_casing',
			G: 'dndecor:large_industrial_cogwheel',
			P: 'create:propeller',
			I: 'create:iron_sheet'
		}
	)
	event.shaped(
		Item.of('dndesires:gold_mixer', 1),
		[
			' P ',
			' CG',
			'NWN'
		],
		{
			P: 'create:precision_mechanism',
			C: 'create:brass_casing',
			G: 'create:large_cogwheel',
			N: 'dndecor:large_netherite_chain',
			W: 'dndesires:gold_whisk'
		}
	)
	event.recipes.create.mixing(Fluid.of('kubejs:catalyst_fluid', 1000), ['4x minecraft:redstone', '2x minecraft:quartz', '2x minecraft:bone_meal', Fluid.of('minecraft:water', 1000)]).heated()
	event.remove({ id: 'dndesires:hydraulic_compacting/veridium_gen'})
	event.remove({ id: 'dndesires:hydraulic_compacting/asurine_gen'})
	event.remove({ id: 'dndesires:hydraulic_compacting/breccia_gen'})
	event.remove({ id: 'dndesires:hydraulic_compacting/crimsite_gen'})
	event.remove({ id: 'dndesires:hydraulic_compacting/ochrum_gen'})
	event.remove({ id: 'dndesires:hydraulic_compacting/netherrack'})
	const colorStones = ['create:veridium', 'create:asurine', 'dndesires:breccia', 'create:crimsite', 'create:ochrum']
	const mixingStones = ['minecraft:diorite', 'minecraft:sandstone', 'minecraft:cobbled_deepslate', 'minecraft:blackstone', 'minecraft:terracotta']
	for (let q = 0; q < colorStones.length; q++){
		event.custom({
  "type": "dndesires:hydraulic_compacting",
  "heat_requirement": "superheated",
  "ingredients": [
    {
      "item": mixingStones[q]
    },
    {
      "type": "neoforge:single",
      "amount": 250,
      "fluid": "minecraft:lava"
    },
    {
      "type": "neoforge:single",
      "amount": 100,
      "fluid": "kubejs:catalyst_fluid"
    }
  ],
  "results": [
    {
      "count": 1,
      "id": colorStones[q]
    }
  ]
})
	}
	event.custom({
  "type": "dndesires:hydraulic_compacting",
  "heat_requirement": "heated",
  "ingredients": [
    {
      "item": "minecraft:cobblestone",
    },
	{
      "item": "minecraft:cobblestone",
    },
	{
      "item": "minecraft:cobblestone",
    },
	{
      "item": "minecraft:cobblestone",
    },
    {
      "type": "neoforge:single",
      "amount": 500,
      "fluid": "minecraft:lava"
    },
    {
      "item": "create:cinder_flour",
    },
	    {
      "item": "create:cinder_flour",
    },
	    {
      "item": "create:cinder_flour",
    },
	    {
      "item": "create:cinder_flour",
    }
  ],
  "results": [
    {
      "count": 4,
      "id": "minecraft:netherrack"
    }
  ]
})
		event.custom({
  "type": "dndesires:hydraulic_compacting",
  "heat_requirement": "superheated",
  "ingredients": [
    {
      "item": "minecraft:cobblestone",
    },
	    {
      "item": "minecraft:cobblestone",
    },
	    {
      "item": "minecraft:cobblestone",
    },
	    {
      "item": "minecraft:cobblestone",
    },
	    {
      "item": "minecraft:cobblestone",
    },
	    {
      "item": "minecraft:cobblestone",
    },
	    {
      "item": "minecraft:cobblestone",
    },
	    {
      "item": "minecraft:cobblestone",
    },
    {
      "type": "neoforge:single",
      "amount": 1000,
      "fluid": "minecraft:lava"
    },
    {
      "item": "create:cinder_flour",
    },
	    {
      "item": "create:cinder_flour",
    },
	    {
      "item": "create:cinder_flour",
    },
	    {
      "item": "create:cinder_flour",
    }
  ],
  "results": [
    {
      "count": 8,
      "id": "minecraft:netherrack"
    }
  ]
})
	event.recipes.create.crushing([CreateItem.of('createdeco:netherite_nugget', 0.0015), CreateItem.of('create:cinder_flour', 0.25)], 'minecraft:magma_block')
	event.custom({
  "type": "createdieselgenerators:basin_fermenting",
  "ingredients": [
    {
      "item": "minecraft:charcoal"
    },
    {
      "type": "fluid_stack",
      "fluid": "minecraft:water",
      "amount": 250
    }
  ],
  "heat_requirement": "superheated",
  "processing_time": 1200,
  "results": [
    {
      "id": "minecraft:coal"
    }
  ]
})
	event.custom({
  "type": "dndesires:seething",
  "ingredients": [
    {
      "item": "minecraft:coal"
    }
  ],
  "results": [
    {
      "id": "kubejs:graphite"
    }
  ]
})
	event.custom({
  "type": "dndesires:hydraulic_compacting",
  "heat_requirement": "superheated",
  "ingredients": [
    {
      "item": "kubejs:graphite"
    },
    {
      "item": "create:crushed_raw_iron"
    }
  ],
  "results": [
    {
      "count": 2,
      "id": "dndesires:diamond_shard"
    }
  ]
})
})