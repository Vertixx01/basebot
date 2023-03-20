import { Client, Collection, Colors} from 'discord.js';
import configuration from '../../configs/config.json';

class CustomClient extends Client {
    color = Colors.Blurple;
    config = configuration;
    commands = new Collection();
}

export default CustomClient;
