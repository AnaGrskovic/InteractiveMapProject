﻿// <auto-generated />
using System;
using InteractiveMapProject.Data.Db.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace InteractiveMapProject.Data.Db.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20231112192359_Initial")]
    partial class Initial
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.13")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("InteractiveMapProject.Contracts.Entities.Professional", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("ContactPersonEmail")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("ContactPersonPhoneNumber")
                        .HasColumnType("int");

                    b.Property<DateTime>("CreationDateTime")
                        .HasColumnType("datetime2");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Function")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Mission")
                        .HasColumnType("int");

                    b.Property<int>("PhoneNumber")
                        .HasColumnType("int");

                    b.Property<string>("ResourcePersonName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ServiceName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Professionals");
                });

            modelBuilder.Entity("InteractiveMapProject.Contracts.Entities.Professional", b =>
                {
                    b.OwnsOne("InteractiveMapProject.Contracts.Entities.Address", "Address", b1 =>
                        {
                            b1.Property<Guid>("ProfessionalId")
                                .HasColumnType("uniqueidentifier");

                            b1.Property<string>("City")
                                .IsRequired()
                                .HasColumnType("nvarchar(max)");

                            b1.Property<int>("PostalCode")
                                .HasColumnType("int");

                            b1.Property<string>("Street")
                                .IsRequired()
                                .HasColumnType("nvarchar(max)");

                            b1.HasKey("ProfessionalId");

                            b1.ToTable("Professionals");

                            b1.WithOwner()
                                .HasForeignKey("ProfessionalId");
                        });

                    b.OwnsOne("InteractiveMapProject.Contracts.Entities.FieldOfIntervention", "FieldOfIntervention", b1 =>
                        {
                            b1.Property<Guid>("ProfessionalId")
                                .HasColumnType("uniqueidentifier");

                            b1.Property<int>("Audience")
                                .HasColumnType("int");

                            b1.Property<string>("PlaceOfIntervention")
                                .IsRequired()
                                .HasColumnType("nvarchar(max)");

                            b1.Property<string>("SectorOfIntervetion")
                                .IsRequired()
                                .HasColumnType("nvarchar(max)");

                            b1.HasKey("ProfessionalId");

                            b1.ToTable("Professionals");

                            b1.WithOwner()
                                .HasForeignKey("ProfessionalId");
                        });

                    b.OwnsOne("InteractiveMapProject.Contracts.Entities.Geolocation", "Geolocation", b1 =>
                        {
                            b1.Property<Guid>("ProfessionalId")
                                .HasColumnType("uniqueidentifier");

                            b1.Property<double>("Latitude")
                                .HasColumnType("float");

                            b1.Property<double>("Longitude")
                                .HasColumnType("float");

                            b1.HasKey("ProfessionalId");

                            b1.ToTable("Professionals");

                            b1.WithOwner()
                                .HasForeignKey("ProfessionalId");
                        });

                    b.Navigation("Address")
                        .IsRequired();

                    b.Navigation("FieldOfIntervention")
                        .IsRequired();

                    b.Navigation("Geolocation")
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}
