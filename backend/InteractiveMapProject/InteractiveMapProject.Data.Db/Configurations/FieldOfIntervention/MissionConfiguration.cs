using InteractiveMapProject.Contracts.Entities.FieldOfIntervention;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace InteractiveMapProject.Data.Db.Configurations.FieldOfIntervention;

public class MissionConfiguration : IEntityTypeConfiguration<Mission>
{
    public void Configure(EntityTypeBuilder<Mission> builder)
    {
        builder.ToTable("Missions");

        builder.HasKey(p => p.Id);

        builder
            .HasMany(p => p.Professionals)
            .WithOne(p => p.Mission);

        builder
            .HasMany(p => p.PendingProfessionals)
            .WithOne(p => p.Mission);

        builder.HasData(
            new Mission(Guid.NewGuid(), "Accueil de loisirs"),
            new Mission(Guid.NewGuid(), "Culture et loisirs"),
            new Mission(Guid.NewGuid(), "Petite enfance"),
            new Mission(Guid.NewGuid(), "Répit"),
            new Mission(Guid.NewGuid(), "Accueil occasionnel"),
            new Mission(Guid.NewGuid(), "Accueil d’urgence"),
            new Mission(Guid.NewGuid(), "Scolarité"),
            new Mission(Guid.NewGuid(), "Accueil de nuit"),
            new Mission(Guid.NewGuid(), "Soins/santé"),
            new Mission(Guid.NewGuid(), "Rééducation"),
            new Mission(Guid.NewGuid(), "Accompagnement à la parentalité"),
            new Mission(Guid.NewGuid(), "Accompagnement administratif"),
            new Mission(Guid.NewGuid(), "Group de parole/Ateliers"),
            new Mission(Guid.NewGuid(), "Information/orientation"));
    }
}
