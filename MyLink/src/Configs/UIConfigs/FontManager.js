import jenkinsConfig from "../jenkinsConfig/fontConfig.json";

const config = {
	default: jenkinsConfig.default ? jenkinsConfig.default : "Roboto-Regular",
	Medium: jenkinsConfig.Medium ? jenkinsConfig.Medium : "Roboto-Medium",
	Blod: jenkinsConfig.Bold ? jenkinsConfig.Bold : "Roboto-Bold"
};

export default config;
