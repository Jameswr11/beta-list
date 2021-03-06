import { Uterus } from './uterus.model';
import { Ovary } from './ovary.model';
import { GestationalSack } from './gestational-sack.model';
import { AdnexalMass } from './adnexal-mass.model';

export interface TransvaginalUltrasound {
    date: string;
    uterus: Uterus;
    ovaries: Ovary[];
    intra_uterine_pregnancy_present: boolean;
    gestational_sack_size: number;
    yolk_sack_present: boolean;
    crown_rump_length: number;
    fetal_heart_rate_present: boolean;
    estimated_gestational_age_in_days: number;
    adnexal_masses: AdnexalMass[];
    free_fluid_amount: string;
}
