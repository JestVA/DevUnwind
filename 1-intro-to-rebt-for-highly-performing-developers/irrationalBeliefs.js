const irrationalBeliefSymptoms = [
	"anxious",
	"depressed",
	"enraged",
	"self hating",
	"self pitying",
	"behaving against your own interest",
	"avoiding what you had better do",
	"addicted to things you shouldn't"
]

const amIThinkingUnscientifically = belief => irrationalBeliefSymptoms.includes(belief);

const irrationalOutcome = amIThinkingUnscientifically("enraged");

console.log(irrationalOutcome); // true

