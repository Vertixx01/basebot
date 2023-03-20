import { ChatInputCommandInteraction, Events } from "discord.js";
import CustomClient from "../classes/customClient";
import Reply from "../systems/reply";

module.exports = {
    name: Events.InteractionCreate,
    async execute(interaction: ChatInputCommandInteraction, client: CustomClient) {
        if (!interaction.isChatInputCommand()) return;

        const { commandName, guild, user } = interaction;
        if (!guild) return;

        const command: any = client.commands.get(commandName);
        if (!command) return await Reply(interaction, "This command does not exist", true) && client.commands.delete(commandName);

        if (!client.config.devs.includes(user.id)) return await Reply(interaction, "You do not have permission to use this command", true);

        command.execute(interaction, client);
    }
}
