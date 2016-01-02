// Type definitions for Riot Games API
// Project: https://developer.riotgames.com/
// Definitions by: Xavier Stouder <https://github.com/xstoudi/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module RiotGamesAPI{
	/**
	* champion-v1.2
	*/
	module Champion{
		interface ChampionDto{
			active: boolean,
			botEnabled: boolean,
			botMmEnabled: boolean,
			freeToPlay: boolean,
			id: number,
			rankedPlayEnabled: boolean
		}
		interface ChampionListDto{
			champions: Array<ChampionDto>
		}
	}
	
	/**
	* current-game-v1.0
	*/
	module CurrentGame{
		interface CurrentGameInfo{
			bannedChampion: Array<BannedChampion>,
			gameId: number,
			gameLength: number,
			gameMode: number,
			gameQueueConfigId: number,
			gameStartTime: number,
			gameType: string,
			mapId: number,
			observers: Observer,
			participants: Array<CurrentGameParticipant>
			platformId: string
		}
		interface BannedChampion{
			championId: number,
			pickTurn: number,
			teamId: number
		}
		interface CurrentGameParticipant{
			bot: boolean,
			championId: number,
			masteries: Array<Mastery>
			profileIconId: number,
			runes: Array<Rune>,
			spell1Id: number,
			spell2Id: number,
			summonerId: number,
			summonerName: string,
			teamId: number
		}
		interface Observer{
			encryptionKey: string
		}
		interface Mastery{
			masterId: number,
			rank: number
		}
		interface Rune{
			count: number,
			runeId: number
		}
	}
	
	/**
	* featured-games-v1.0
	*/
	module FeaturedGames{
		interface FeaturedGames{
			clientRefreshInterval: number,
			gameList: Array<FeaturedGameInfo>
		}
		interface FeaturedGameInfo{
			bannedChampions: Array<BannedChampion>
			gameId: number,
			gameLength: number,
			gameMode: string,
			gameQueueConfigId: number,
			gameStartTime: number,
			gameType: string,
			mapId: number,
			observers: Observer,
			participants: Array<Participant>,
			plateformId: string
		}
		interface Participant{
			bot: boolean,
			championId: number,
			profileIconId: number,
			spell1Id: number,
			spell2Id: number,
			summonerName: string,
			teamId: number
		}
		interface BannedChampion{
			championId: number,
			pickTurn: number,
			teamId: number
		}
		interface Observer{
			encryptionKey: string
		}
	}
	
	/**
	* game-v1.3
	*/
	module Game{
		interface RecentGamesDto{
			games: Array<GameDto>,
			summonerId: number
		}
		interface GameDto{
			championId: number,
			createDate: number,
			fellowPlayers: Array<PlayerDto>,
			gameId: number,
			gameMode: string,
			gameType: string,
			invalid: boolean,
			ipEarned: number,
			level: number,
			mapId: number,
			spell1: number,
			spell2: number
			stats: RawStatsDto,
			subType: string,
			teamId: number
		}
		interface PlayerDto{
			championId: number,
			summonerId: number,
			teamId: number
		}
		interface RawStatsDto{
			assists: number,
			barracksKilled: number,
			championsKilled: number,
			combatPlayerScore: number,
			consumablesPurchased: number,
			damageDealtPlayer: number,
			doubleKills: number,
			firstBlood: number,
			gold: number,
			goldEarned: number,
			goldSpent: number,
			item0: number,
			item1: number,
			item2: number,
			item3: number,
			item4: number,
			item5: number,
			item6: number,
			itemsPurchased: number,
			killingSprees: number,
			largestCriticalStrike: number,
			largestKillingSpree: number,
			largestMultiKill: number,
			legendaryItemsCreated: number,
			level: number,
			magicDamageDealtPlayer: number,
			magicDamageDealtToChampions: number,
			magicDamageTaken: number,
			minionsDenied: number,
			minionsKilled: number,
			neutralMinionsKilled: number,
			neutralMinionsKilledEnemyJungle: number,
			neutralMinionsKilledYourJungle: number,
			nexusKilled: boolean,
			nodeCapture: number,
			nodeCaptureAssist: number,
			nodeNeutralize: number,
			nodeNeutralizeAssist: number,
			numDeaths: number,
			numItemsBought: number,
			objectivePlayerScore: number,
			pentaKills: number,
			physicalDamageDealtPlayer: number,
			physicalDamageDealtToChampions: number,
			physicalDamageTaken: number,
			playerPosition: number,
			playerRole: number,
			quadraKills: number,
			sightWardsBought: number,
			spell1Cast: number,
			spell2Cast: number,
			spell3Cast: number,
			spell4Cast: number,
			summonSpell1Cast: number,
			summonSpell2Cast: number,
			superMonsterKilled: number,
			team: number,
			teamObjective: number,
			timePlayed: number,
			totalDamageDealt: number,
			totalDamageDealtToChampions: number,
			totalDamageTaker: number,
			totalHeal: number,
			totalPlayerScore: number,
			totalScoreRank: number,
			totalTimeCrowdControlDealt: number,
			totalUnitsHealed: number,
			tripleKills: number,
			trueDamageDealtPlayer: number,
			trueDamageDealtToChampions: number,
			trueDamageTaken: number,
			turrentsKilled: number,
			unrealKills: number,
			victoryPointTotal: number,
			visionWardsBought: number,
			wardKilled: number,
			wardPlaced: number,
			win: boolean
		}
	}
	
	/**
	* league-v2.5
	*/
	module League{
		interface LeagueDto{
			entries: Array<LeagueEntryDto>,
			name: string,
			participantId: string,
			queue: string,
			tier: string
		}
		interface LeagueEntryDto{
			division: string,
			isFreshBlood: boolean,
			isHotStreak: boolean,
			isInactive: boolean,
			isVeteran: boolean,
			leaguePoints: number,
			losses: number,
			miniSeries: MiniSeriesDto,
			playerOrTeamId: string,
			playerOrTeamName: string,
			wins: number
		}
		interface MiniSeriesDto{
			losses: number,
			progress: string,
			target: number,
			wins: number
		}
	}
	
	/**
	* lol-static-data-v1.2
	*/
	module LolStaticData{
		interface ChampionListDto{
			data: {[str: string]: ChampionDto},
			format: string,
			keys: {[str: string]: string},
			type: string,
			version: string
		}
		interface ChampionDto{
			allytips: Array<string>,
			blurb: string,
			enemytips: Array<string>,
			id: number,
			image: ImageDto,
			info: InfoDto,
			key: string,
			lore: string,
			name: string,
			partype: string,
			passive: PassiveDto,
			recommended: Array<RecommendedDto>,
			skins: Array<SkinDto>,
			spells: Array<ChampionSpellDto>,
			stats: StatsDto,
			tags: Array<string>,
			title: string
		}
		interface ChampionSpellDto{
			altimages: Array<ImageDto>,
			cooldown: Array<number>,
			cooldownBurn: string,
			cost: Array<number>,
			costBurn: string,
			costType: string,
			description: string,
			effect: Array<Array<number>>,
			effectBurn: Array<string>
			image: ImageDto,
			key: string,
			leveltip: LevelTipDto,
			maxrank: number,
			name: string,
			range: Array<number> | string,
			rangeBurn: string,
			resource: string,
			sanitizedDescription: string,
			sanitizedTooltip: string,
			tooltip: string,
			vars: Array<SpellVarsDto>
		}
		interface ImageDto{
			full: string,
			group: string,
			h: number,
			sprite: string,
			w: number,
			x: number,
			y: number
		}
		interface InfoDto{
			attack: number,
			defense: number,
			difficulty: number,
			magic: number
		}
		interface PassiveDto{
			description: string,
			image: ImageDto,
			name: string,
			sanitizedDescription: string
		}
		interface RecommendedDto{
			block: Array<BlockDto>,
			champion: string,
			map: string,
			mode: string,
			priority: boolean,
			title: string,
			type: string
		}
		interface SkinDto{
			id: number,
			name: string,
			num: number
		}
		interface StatsDto{
			armor: number,
			armorperlevel: number,
			attackdamage: number,
			attackdamageperlevel: number,
			attackrange: number,
			attackspeedoffset: number,
			attackspeedperlevel: number,
			crit: number,
			critperlevel: number,
			hp: number,
			hpperlevel: number,
			hpregen: number,
			hpregenperlevel: number,
			movespeed: number,
			mp: number,
			mpperlevel: number,
			mpregen: number,
			mpregenperlevel: number,
			spellblock: number,
			spellblockperlevel: number
		}
		interface LevelTipDto{
			effect: Array<string>,
			label: Array<string>
		}
		interface SpellVarsDto{
			coeff: Array<number>,
			dyn: string,
			key: string,
			link: string,
			ranksWith: string
		}
		interface BlockDto{
			items: Array<BlockItemDto>,
			recMath: boolean,
			type: string
		}
		interface BlockItemDto{
			count: number,
			id: number
		}
		interface ItemListDto{
			basic: BasicDataDto,
			data: Array<{[str: string]: ItemDto}>
			groups: Array<GroupDto>,
			tree: Array<ItemTreeDto>,
			type: string,
			version: string
		}
		interface BasicDataDto{
			colloq: string,
			consumeOnFull: boolean,
			consumed: boolean,
			depth: number,
			description: string,
			from: Array<string>,
			gold: GoldDto,
			group: string,
			hideFromAll: boolean,
			id: number,
			image: ImageDto,
			inStore: boolean,
			into: Array<string>,
			maps: Array<{[str: string]: boolean}>,
			name: string,
			plaintext: string,
			requiredChampion: string,
			rune: MetaDataDto,
			sanitizedDescription: string,
			specialRecipe: number,
			stacks: number,
			stats: BasicDataStatsDto,
			tags: Array<string>
		}
		interface GroupDto{
			MaxGroupOwnable: string,
			key: string
		}
		interface ItemDto{
			colloq: string,
			consumeOnFull: boolean,
			consumed: boolean,
			depth: number,
			description: string,
			effect: Array<{[str: string]: string}>,
			from: Array<string>,
			gold: GoldDto,
			group: string,
			hideFromAll: boolean,
			id: number,
			image: ImageDto,
			inStore: boolean,
			into: Array<string>,
			maps: Array<{[str: string]: boolean}>,
			name: string,
			plaintext: string,
			requiredChampion: string,
			rune: MetaDataDto,
			sanitizedDescription: string,
			specialRecipe: number,
			stacks: number,
			stats: BasicDataStatsDto,
			tags: Array<string>
		}
		interface ItemTreeDto{
			header: string,
			tags: Array<string>
		}
		interface BasicDataStatsDto{
			FlatArmorMod: number,	
			FlatAttackSpeedMod: number,	
			FlatBlockMod: number,	
			FlatCritChanceMod: number,	
			FlatCritDamageMod: number,	
			FlatEXPBonus: number,	
			FlatEnergyPoolMod: number,	
			FlatEnergyRegenMod: number,	
			FlatHPPoolMod: number,	
			FlatHPRegenMod: number,	
			FlatMPPoolMod: number,	
			FlatMPRegenMod: number,	
			FlatMagicDamageMod: number,	
			FlatMovementSpeedMod: number,	
			FlatPhysicalDamageMod: number,	
			FlatSpellBlockMod: number,	
			PercentArmorMod: number,	
			PercentAttackSpeedMod: number,	
			PercentBlockMod: number,	
			PercentCritChanceMod: number,	
			PercentCritDamageMod: number,	
			PercentDodgeMod: number,	
			PercentEXPBonus: number,	
			PercentHPPoolMod: number,	
			PercentHPRegenMod: number,	
			PercentLifeStealMod: number,	
			PercentMPPoolMod: number,	
			PercentMPRegenMod: number,	
			PercentMagicDamageMod: number,	
			PercentMovementSpeedMod: number,	
			PercentPhysicalDamageMod: number,	
			PercentSpellBlockMod: number,	
			PercentSpellVampMod: number,	
			rFlatArmorModPerLevel: number,	
			rFlatArmorPenetrationMod: number,	
			rFlatArmorPenetrationModPerLevel: number,	
			rFlatCritChanceModPerLevel: number,	
			rFlatCritDamageModPerLevel: number,	
			rFlatDodgeMod: number,	
			rFlatDodgeModPerLevel: number,	
			rFlatEnergyModPerLevel: number,	
			rFlatEnergyRegenModPerLevel: number,	
			rFlatGoldPer10Mod: number,	
			rFlatHPModPerLevel: number,	
			rFlatHPRegenModPerLevel: number,	
			rFlatMPModPerLevel: number,	
			rFlatMPRegenModPerLevel: number,	
			rFlatMagicDamageModPerLevel: number,	
			rFlatMagicPenetrationMod: number,	
			rFlatMagicPenetrationModPerLevel: number,	
			rFlatMovementSpeedModPerLevel: number,	
			rFlatPhysicalDamageModPerLevel: number,	
			rFlatSpellBlockModPerLevel: number,	
			rFlatTimeDeadMod: number,	
			rFlatTimeDeadModPerLevel: number,	
			rPercentArmorPenetrationMod: number,	
			rPercentArmorPenetrationModPerLevel: number,	
			rPercentAttackSpeedModPerLevel: number,	
			rPercentCooldownMod: number,	
			rPercentCooldownModPerLevel: number,	
			rPercentMagicPenetrationMod: number,	
			rPercentMagicPenetrationModPerLevel: number,	
			rPercentMovementSpeedModPerLevel: number,	
			rPercentTimeDeadMod: number,	
			rPercentTimeDeadModPerLevel: number
		}
		interface GoldDto{
			base: number,
			purchasable: boolean,
			sell: number,
			total: number
		}
		interface MetaDataDto{
			isRune: boolean,
			tier: string,
			type: string
		}
		interface LanguageStringsDto{
			data: Array<{[str: string]: string}>,
			type: string,
			version: string
		}
		interface MapDataDto{
			data: Array<{[str: string]: MapDetailsDto}>,
			type: string,
			version: string
		}
		interface MapDetailsDto{
			image: ImageDto,
			mapId: number,
			mapName: string,
			unpurchasableItemList: Array<number>,
		}
		interface MasteryListDto{
			data: Array<{[str: string]: MasteryDto}>,
			tree: MasteryTreeDto,
			type: string,
			version: string	
		}
		interface MasteryDto{
			description: Array<string>,
			id: number,
			image: ImageDto,
			masteryTree: string,
			name: string,
			prereq: string,
			ranks: number,
			sanitizedDescription: Array<string>
		}
		interface MasteryTreeDto{
			Defense: Array<MasteryTreeListDto>,
			Offense: Array<MasteryTreeListDto>,
			Utility: Array<MasteryTreeListDto>
		}
		interface MasteryTreeListDto{
			masteryTreeItems: Array<MasteryTreeItemDto>
		}
		interface MasteryTreeItemDto{
			masteryId: number,
			prereq: string
		}
		interface RealmDto{
			cdn: string,
			css: string,
			dd: string,
			l: string,
			lg: string,
			n: Array<{[str: string]: string}>,
			profileiconmax: number,
			storage: string,
			v: string
		}
		interface RuneListDto{
			basic: BasicDataDto,
			data: Array<{[str: string]: RuneDto}>,
			type: string,
			version: string
		}
		interface RuneDto{
			colloq: string,
			consumeOnFull: boolean,
			consumed: boolean,
			depth: number,
			description: string,
			from: Array<string>,
			group: string,
			hideFromAll: boolean,
			id: number,
			image: ImageDto,
			inStore: boolean,
			into: Array<string>,
			maps: Array<{[str: string]: boolean}>,
			name: string,
			plaintext: string,
			requiredChampion: string,
			rune: MetaDataDto,
			sanitizedDescription: string,
			specialRecipe: number,
			stacks: number,
			stats: BasicDataStatsDto,
			tags: Array<string>
		}
		interface SummonerSpellListDto{
			data: Array<{[str: string]: SummonerSpellDto}>,
			type: string,
			version: string
		}
		interface SummonerSpellDto{
			cooldown: Array<number>,
			cooldownBurn: string,
			cost: Array<number>,
			costBurn: string,
			costType: string,
			description: string,
			effect: Array<Array<number>>,
			effectBurn: Array<string>,
			id: number,
			image: ImageDto,
			key: string,
			leveltip: LevelTipDto,
			maxrank: number,
			modes: Array<string>,
			name: string,
			range: Array<number> | string,
			rangeBurn: string,
			resource: string,
			sanitizedDescription: string,
			sanitizedTooltip: string,
			summonerLevel: number,
			tooltip: string,
			vars: Array<SpellVarsDto>
		}
	}
	
	/**
	* lol-status-v1.0
	*/
	module LolStatus{
		interface Shard{
			hostname: string,
			locales: Array<string>,
			name: string,
			region_tag: string,
			slug: string
		}
		interface ShardStatus{
			hostname: string,
			locales: Array<string>,
			name: string,
			region_tag: string,
			services: Array<Service>
			slug: string
		}
		interface Service{
			incidents: Array<Incident>,
			name: string,
			slug: string,
			status: string
		}
		interface Incident{
			active: boolean,
			created_at: string,
			id: number,
			updates: Array<Message>
		}
		interface Message{
			author: string,
			content: string,
			created_at: string,
			id: number,
			severity: string,
			translations: Array<Translation>,
			updated_at: string
		}
		interface Translation{
			content: string,
			locale: string,
			updated_at: string
		}
	}
	
	/**
	* match-v2.2
	*/
	module Match{
		interface MatchDetail{
			mapId: number,
			matchCreation: number,
			matchId: number,
			matchMode: string,
			matchType: string,
			matchVersion: string,
			participantIdentities: Array<ParticipantIdentity>,
			participants: Array<Participant>,
			plateformId: string,
			queueType: string,
			region: string,
			season: string,
			teams: Array<Team>,
			timeline: Timeline
		}
		interface Participant{
			championId: number,
			highestAchievedSeasonTier: string,
			masteries: Array<Mastery>,
			participantId: number,
			runes: Array<Rune>,
			spell1Id: number,
			spell2Id: number,
			stats: ParticipantStats,
			teamId: number,
			timeline: ParticipantTimeline
		}
		interface ParticipantIdentity{
			participantId: number,
			player: Player
		}
		interface Team{
			bans: Array<BannedChampion>,
			baronKills: number,
			dominionVictoryScore: number,
			dragonKills: number,
			firstBaron: boolean,
			firstBlood: boolean,
			firstDragon: boolean,
			firstInhibitor: boolean,
			firstTower: boolean,
			inhibitorKills: number,
			teamId: number,
			towerKills: number,
			vilemawKills: number,
			winner: boolean
		}
		interface Timeline{
			frameInverval: number,
			frames: Array<Frame>
		}
		interface Mastery{
			masteryId: number,
			rank: number
		}
		interface ParticipantStats{
			assists: number,
			champLevel: number,
			combatPlayerScore: number,
			deaths: number,
			doubleKills: number,
			firstBloodAssist: boolean,
			firstBloodKill: boolean,
			firstInhibitorAssist: boolean,
			firstInhibitorKill: boolean,
			firstTowerAssist: boolean,
			firstTowerKill: boolean,
			goldEarned: number,
			goldSpent: number,
			inhibitorKills: number,
			item0: number,
			item1: number,
			item2: number,
			item3: number,
			item4: number,
			item5: number,
			item6: number,
			killingSprees: number,
			kills: number,
			largestCriticalStrike: number,
			largestKillingSpree: number,
			largestMultiKill: number,
			magicDamageDealt: number,
			magicDamageDealtToChampions: number,
			magicDamageTaken: number,
			minionsKilled: number,
			neutralMinionsKilled: number,
			neutralMinionsKilledEnemyJungle: number,
			neutralMinionsKilledTeamJungle: number,
			nodeCapture: number,
			nodeCaptureAssist: number,
			nodeNeutralize: number,
			nodeNeutralizeAssist: number,
			objectivePlayerScore: number,
			pentaKills: number,
			physicalDamageDealt: number,
			physicalDamageDealtToChampions: number,
			physicalDamageTaken: number,
			quadraKills: number,
			sightWardsBoughtInGame: number,
			teamObjective: number,
			totalDamageDealt: number,
			totalDamageDealtToChampions: number,
			totalDamageTaken: number,
			totalHeal: number,
			totalPlayerScore: number,
			totalScoreRank: number,
			totalTimeCrowdControlDealt: number,
			totalUnitsHealed: number,
			towerKills: number,
			tripleKills: number,
			trueDamageDealt: number,
			trueDamageDealtToChampions: number,
			trueDamageTaken: number,
			unrealKills: number,
			visionWardsBoughtInGame: number,
			wardsKilled: number,
			wardsPlaced: number,
			winner: boolean
		}
		interface ParticipantTimeline{
			ancientGolemAssistsPerMinCounts: ParticipantTimelineData,
			ancientGolemKillsPerMinCounts: ParticipantTimelineData,
			assistedLaneDeathsPerMinDeltas: ParticipantTimelineData,
			assistedLaneKillsPerMinDeltas: ParticipantTimelineData,
			baronAssistsPerMinCounts: ParticipantTimelineData,
			baronKillsPerMinCounts: ParticipantTimelineData,
			creepsPerMinDeltas: ParticipantTimelineData,
			csDiffPerMinDeltas: ParticipantTimelineData,
			damageTakenDiffPerMinDeltas: ParticipantTimelineData,
			damageTakenPerMinDeltas: ParticipantTimelineData,
			dragonAssistsPerMinCounts: ParticipantTimelineData,
			dragonKillsPerMinCounts: ParticipantTimelineData,
			elderLizardAssistsPerMinCounts: ParticipantTimelineData,
			elderLizardKillsPerMinCounts: ParticipantTimelineData,
			goldPerMinDeltas: ParticipantTimelineData,
			inhibitorAssistsPerMinCounts: ParticipantTimelineData,
			inhibitorKillsPerMinCounts: ParticipantTimelineData,
			lane: string,
			role: string,
			towerAssistsPerMinCounts: ParticipantTimelineData,
			towerKillsPerMinCounts: ParticipantTimelineData,
			towerKillsPerMinDeltas: ParticipantTimelineData,
			vilemawAssistsPerMinCounts: ParticipantTimelineData,
			vilemawKillsPerMinCounts: ParticipantTimelineData,
			wardsPerMinDeltas: ParticipantTimelineData,
			xpDiffPerMinDeltas: ParticipantTimelineData,
			xpPerMinDeltas: ParticipantTimelineData
		}
		interface Rune{
			rank: number,
			runeId: number
		}
		interface Player{
			matchHistoryUri: string,
			profileIcon: number,
			summonerId: number,
			summonerName: string
		}
		interface BannedChampion{
			championId: number,
			pickTurn: number
		}
		interface Frame{
			events: Array<Event>,
			participanFrames: Array<{[str: string]: ParticipantFrame}>,
			timestamp: number
		}
		interface ParticipantTimelineData{
			tenToTwenty: number,
			thirtyToEnd: number,
			twentyToThirty: number,
			zeroToTen: number
		}
		interface Event{
			ascendedType: string,
			assistingParticipantIds: Array<number>,
			buildingType: string,
			creatorId: number,
			eventType: string,
			itemAfter: number,
			itemBefore: number,
			itemId: number,
			killerId: number,
			laneType: string,
			levelUpType: string,
			monsterType: string,
			participantId: number,
			pointCaptured: string,
			position: Position,
			skillSlot: number,
			teamId: number,
			timestamp: number,
			towerType: string,
			victimId: number,
			wardType: string,
		}
		interface ParticipantFrame{
			currentGold: number,
			dominionScore: number,
			jungleMinionsKilled: number,
			level: number,
			minionsKilled: number,
			participantId: number,
			position: Position,
			teamScore: number,
			totalGold: number,
			xp: number
		}
		interface Position{
			x: number,
			y: number
		}
	}
	
	/**
	* matchlist-v2.2
	*/
	module MatchList{
		interface MatchList{
			endIndex: number,
			matches: Array<MatchReference>,
			startIndex: number,
			totalGames: number
		}
		interface MatchReference{
			champion: number,
			lane: string,
			matchId: number,
			plateformId: string,
			queue: string,
			region: string,
			role: string,
			season: string,
			timestamp: number
		}
	}
	
	/**
	* stats-v1.3
	*/
	module Stats{
		interface RankedStatsDto{
			champions: Array<ChampionStatsDto>,
			modifyDate: number,
			summonerId: number,
		}
		interface ChampionStatsDto{
			id: number,
			stats: AggregatedStatsDto
		}
		interface AggregatedStatsDto{
			averageAssists: number,
			averageChampionsKilled: number,
			averageCombatPlayerScore: number,
			averageNodeCapture: number,
			averageNodeCaptureAssist: number,
			averageNodeNeutralize: number,
			averageNodeNeutralizeAssist: number,
			averageNumDeaths: number,
			averageObjectivePlayerScore: number,
			averageTeamObjective: number,
			averageTotalPlayerScore: number,
			botGamesPlayed: number, 		
			killingSpree: number,
			maxAssists: number,
			maxChampionsKilled: number,
			maxCombatPlayerScore: number,
			maxLargestCriticalStrike: number,
			maxLargestKillingSpree: number,
			maxNodeCapture: number,
			maxNodeCaptureAssist: number,
			maxNodeNeutralize: number,
			maxNodeNeutralizeAssist: number,
			maxNumDeaths: number,
			maxObjectivePlayerScore: number,
			maxTeamObjective: number,
			maxTimePlayed: number,
			maxTimeSpentLiving: number,
			maxTotalPlayerScore: number,
			mostChampionKillsPerSession: number,
			mostSpellsCast: number,
			normalGamesPlayed: number,
			rankedPremadeGamesPlayed: number,
			rankedSoloGamesPlayed: number,
			totalAssists: number,
			totalChampionKills: number,
			totalDamageDealt: number,
			totalDamageTaken: number,
			totalDeathsPerSession: number,
			totalDoubleKills: number,
			totalFirstBlood: number,
			totalGoldEarned: number,
			totalHeal: number,
			totalMagicDamageDealt: number,
			totalMinionsKills: number,
			totalNeutralMinionsKilled: number,
			totalNodeCapture: number,
			totalNodeNeutralize: number,
			totalPentaKills: number,
			totalPhysicalDamageDealt: number,
			totalQuadraKills: number,
			totalSessionsLost: number,
			totalSessionsPlayed: number,
			totalSessionsWon: number,
			totalTripleKills: number,
			totalTurretsKilleds: number,
			totalUnrealKills: number
		} 
		interface PlayerStatsSummaryListDto{
			playerStatSummaries: Array<PlayerStatsSummaryDto>,
			summonerId: number
		}
		interface PlayerStatsSummaryDto{
			aggregatedStats: AggregatedStatsDto,
			losses: number,
			modifyDate: number,
			playerStatSummaryType: string,
			wins: number
		}
	}
	
	/**
	* summoner-v1.4
	*/
	module Summoner{
		interface SummonerDto{
			id: number,
			name: string,
			profileIconId: number,
			revisionDate: number,
			summonerLevel: number
		}
		interface MasteryPagesDto{
			pages: Array<MasteryPageDto>,
			summonerId: number
		}
		interface MasteryPageDto{
			current: boolean,
			id: number,
			masteries: Array<MasteryDto>,
			name: string
		}
		interface MasteryDto{
			id: number,
			rank: number
		}
		interface RunePagesDto{
			pages: Array<RunePageDto>,
			summonerId: number
		}
		interface RunePageDto{
			current: boolean,
			id: number,
			name: string,
			slots: Array<RuneSlotDto>
		}
		interface RuneSlotDto{
			runeId: number,
			runeSlotId: number
		}
	}
	
	/**
	* team-v2.4
	*/
	module Team{
		interface TeamDto{
			createDate: number,
			fullId: string,
			lastGameDate: number,
			lastJoinDate: number,
			lastJoinedRankedTeamQueueDate: number,
			matchHistory: Array<MatchHistorySummaryDto>,
			modifyDate: number,
			name: string,
			roster: RosterDto,
			secondLastJoinDate: number,
			status: string,
			tag: string,
			teamStatDetails: Array<TeamStatDetailDto>,
			thirdLastJoinDate: number
		}
		interface MatchHistorySummaryDto{
			assists: number,
			date: number,
			deaths: number,
			gameId: number,
			gameMode: string,
			invalid: boolean,
			kills: number,
			mapId: number,
			opposingTeamKills: number,
			opposingTeamName: string,
			win: boolean
		}
		interface RosterDto{
			memberList: Array<TeamMemberInfoDto>,
			ownerId: number
		}
		interface TeamStatDetailDto{
			averageGamesPlayed: number,
			losses: number,
			teamStatType: string,
			wins: number
		}
		interface TeamMemberInfoDto{
			inviteDate: number,
			joinDate: number,
			playerId: number,
			status: string
		}
	}
}