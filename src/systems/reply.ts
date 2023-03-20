import { CommandInteraction, EmbedBuilder } from "discord.js"

function Reply(interaction: CommandInteraction, message: string, ephemeral: boolean = false) {
    return interaction.reply({
        embeds: [
            new EmbedBuilder()
                .setColor("#FF0000")
                .setDescription(message)
        ],
        ephemeral
    })
}

export default Reply;
