class BlacklistService {

  static isBlacklisted(matriculation: string): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      setTimeout(() => {
        resolve(matriculation === 'AA123AA');
      }, 50);
    });
  }
}

export default BlacklistService;
