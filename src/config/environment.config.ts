class EnvConfig {
  private readonly env: Record<string, string | undefined>;

  constructor() {
    this.env = process.env;
  }
  getPort(): number {
    return parseInt(this.env.PORT || "3000");
  }
  getDBURL(): string {
    return this.env.MONGO_DB_URL || "mongodb://127.0.0.1:27017/";
  }
  getNodeEnv(): string | undefined {
    return this.env.NODE_ENV;
  }
}
export default new EnvConfig();
