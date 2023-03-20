import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import CustomClient from "../../classes/customClient";
import Reply from "../../systems/reply";

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Shows the bot's ping"),

    execute(interaction: ChatInputCommandInteraction, client: CustomClient) {
        Reply(interaction, `Pong! ${client.ws.ping}ms`)
    }
}
